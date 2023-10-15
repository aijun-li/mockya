<script lang="ts" setup>
import { useEventListener, useLocalStorage, useResizeObserver, useStyleTag } from '@vueuse/core';
import { computed, nextTick, onUnmounted, ref } from 'vue';

interface Props {
  vertical?: boolean;
  barSize?: number;
  barColor?: string;
  barFocusedSize?: number;
  barFocusedColor?: string;
  initStartSize?: string;
  localKey?: string;

  startMinSize?: number;
  startMaxSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  vertical: false,
  barSize: 6,
  barColor: 'transparent',
  barFocusedSize: 2,
  barFocusedColor: 'transparent',
  localKey: '',
});

const layoutRef = ref<HTMLDivElement | null>(null);
const barRef = ref<HTMLDivElement | null>(null);
const startRef = ref<HTMLDivElement | null>(null);
const endRef = ref<HTMLDivElement | null>(null);

const hovered = ref(false);
const pressed = ref(false);

const storedStartSize = useLocalStorage(props.localKey, '');
const startSize = ref(storedStartSize.value || props.initStartSize || '50%');

const { css: resizeStyle, load: loadResizeStyle, unload: unloadResizeStyle } = useStyleTag('');

const startStyle = computed(() =>
  props.vertical
    ? {
        'height': startSize.value,
        'min-height': props.startMinSize && `${props.startMinSize}px`,
        'max-height': props.startMaxSize && `${props.startMaxSize}px`,
      }
    : {
        'width': startSize.value,
        'min-width': props.startMinSize && `${props.startMinSize}px`,
        'max-width': props.startMaxSize && `${props.startMaxSize}px`,
      },
);

const barStyle = computed(() =>
  props.vertical
    ? {
        'height': `${props.barSize}px`,
        'width': '100%',
        'cursor': 'row-resize',
        'background-color': props.barColor,
      }
    : {
        'width': `${props.barSize}px`,
        'height': '100%',
        'cursor': 'col-resize',
        'background-color': props.barColor,
      },
);

const barFocusedStyle = computed(() =>
  props.vertical
    ? {
        'height': `${props.barFocusedSize}px`,
        'width': '100%',
        'background-color': hovered.value || pressed.value ? props.barFocusedColor : 'transparent',
      }
    : {
        'width': `${props.barFocusedSize}px`,
        'height': '100%',
        'background-color': hovered.value || pressed.value ? props.barFocusedColor : 'transparent',
      },
);

useEventListener(barRef, 'mousedown', () => {
  pressed.value = true;

  resizeStyle.value = `
    :root { 
      cursor: ${props.vertical ? 'row-resize' : 'col-resize'}; 
    }
    * {
      user-select: none;
      pointer-events: none;
    }
  `;
  loadResizeStyle();
});

useEventListener(document, 'mouseup', () => {
  pressed.value = false;

  unloadResizeStyle();
});

useEventListener(document, 'mousemove', (e) => {
  if (!pressed.value) {
    return;
  }

  const { width: layoutWidth = 0, height: layoutHeight = 0 } = layoutRef.value?.getBoundingClientRect() ?? {};
  const { width: startWidth = 0, height: startHeight = 0 } = startRef.value?.getBoundingClientRect() ?? {};

  if (props.vertical) {
    startSize.value = `${Math.min(startHeight + e.movementY, layoutHeight - props.barSize)}px`;
  } else {
    startSize.value = `${Math.min(startWidth + e.movementX, layoutWidth - props.barSize)}px`;
  }

  if (props.localKey) {
    storedStartSize.value = startSize.value;
  }

  nextTick(() => {
    const mainScrollSize = (props.vertical ? layoutRef.value?.scrollHeight : layoutRef.value?.scrollWidth) ?? 0;
    const mainOffsetSize = (props.vertical ? layoutRef.value?.offsetHeight : layoutRef.value?.offsetWidth) ?? 0;
    if (mainScrollSize > mainOffsetSize) {
      const endSize = (props.vertical ? endRef.value?.scrollHeight : endRef.value?.scrollWidth) ?? 0;
      startSize.value = `${mainOffsetSize - props.barSize - endSize}px`;

      if (props.localKey) {
        storedStartSize.value = startSize.value;
      }
    }
  });
});

useResizeObserver(layoutRef, (entries) => {
  const entry = entries[0];
  const { width: layoutWidth, height: layoutHeight } = entry.contentRect;
  const { width: startWidth = 0, height: startHeight = 0 } = startRef.value?.getBoundingClientRect() ?? {};

  if (props.vertical) {
    startSize.value = `${Math.min(startHeight, layoutHeight - props.barSize)}px`;
  } else {
    startSize.value = `${Math.min(startWidth, layoutWidth - props.barSize)}px`;
  }

  if (props.localKey) {
    storedStartSize.value = startSize.value;
  }
});

onUnmounted(() => {
  unloadResizeStyle();
});
</script>

<template>
  <div ref="layoutRef" class="resize-layout flex" :class="{ 'flex-col': vertical }">
    <div
      ref="startRef"
      class="start-container flex-none"
      :class="[vertical ? 'min-h-fit max-h-full h-1/2' : 'min-w-fit max-w-full w-1/2']"
      :style="startStyle"
    >
      <slot name="start" />
    </div>

    <div
      ref="barRef"
      class="flex-none flex-center"
      :style="barStyle"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <div class="transition rounded-full" :style="barFocusedStyle" />
    </div>

    <div
      ref="endRef"
      class="end-container flex-1"
      :class="[vertical ? 'min-h-fit max-h-full' : 'min-w-fit max-w-full']"
    >
      <slot name="end" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resize-layout {
  width: 100%;
  height: 100%;
}
</style>
