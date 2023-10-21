<script lang="ts" setup>
import { Codemirror } from 'vue-codemirror';
import { computed, nextTick, shallowRef } from 'vue';
import { defaultExtensions } from './config';
import * as prettier from 'prettier';
import { EditorView } from '@codemirror/view';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import { Tooltip } from '@/daisy';
import { ParagraphBreak, AlignTextLeft } from '@icon-park/vue-next';
import { IconButton } from '@/components';
import { useLocalStorage } from '@vueuse/core';
import { LocalStorageKey } from '@/const';

defineExpose({
  format,
});

interface Props {
  modelValue: string;
}

type Emits = {
  'update:modelValue': [string];
  'change': [string];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const cmView = shallowRef<EditorView>();

const content = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
    emit('change', val);
  },
});

const wrapLine = useLocalStorage(LocalStorageKey.EditorLineWrap, false);

const extensions = computed(() =>
  wrapLine.value ? [...defaultExtensions, EditorView.lineWrapping] : defaultExtensions,
);

function getCursorPosition() {
  const ranges = cmView.value?.state.selection.ranges;
  return ranges?.[0].anchor ?? 0;
}

async function format() {
  const result = await prettier.formatWithCursor(props.modelValue, {
    cursorOffset: getCursorPosition(),
    parser: 'json5',
    plugins: [babelPlugin, estreePlugin],
  });

  emit('update:modelValue', result.formatted);
  emit('change', result.formatted);

  nextTick(() => {
    const newOffset = Math.max(0, result.cursorOffset);
    cmView.value?.dispatch({
      selection: {
        anchor: newOffset,
        head: newOffset,
      },
    });
    cmView.value?.focus();
  });
}

function toggleLineWrap() {
  wrapLine.value = !wrapLine.value;
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex items-center justify-end">
      <Tooltip content="Line Wrap">
        <IconButton
          :class="{
            'text-success': wrapLine,
          }"
          :size="28"
          @click="toggleLineWrap"
        >
          <ParagraphBreak :size="16" />
        </IconButton>
      </Tooltip>
      <Tooltip class="ml-1" content="Format">
        <IconButton :size="28" @click="format">
          <AlignTextLeft :size="16" />
        </IconButton>
      </Tooltip>
    </div>
    <Codemirror
      v-model="content"
      placeholder="Please enter your mock json data"
      :extensions="extensions"
      @ready="cmView = $event.view"
    />
  </div>
</template>
