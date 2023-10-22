<script lang="ts" setup>
import { IconButton } from '@/components';
import { LocalStorageKey } from '@/const';
import { Tooltip } from '@/daisy';
import { EditorView, keymap } from '@codemirror/view';
import { AlignTextLeft, ParagraphBreak } from '@icon-park/vue-next';
import { useLocalStorage } from '@vueuse/core';
import * as prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import { computed, nextTick, shallowRef } from 'vue';
import { Codemirror } from 'vue-codemirror';
import { defaultExtensions } from './config';

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

const isMac = navigator.platform.toLowerCase().includes('mac');

const keyMap = keymap.of([
  {
    win: 'Shift-Alt-f',
    mac: 'Shift-Cmd-f',
    run: () => {
      format();
      return true;
    },
  },
  {
    key: 'Ctrl-s',
    run: () => {
      format();
      return true;
    },
  },
  {
    win: 'Shift-Alt-z',
    mac: 'Shift-Cmd-z',
    run: () => {
      toggleLineWrap();
      return true;
    },
  },
]);

const extensions = computed(() =>
  wrapLine.value ? [...defaultExtensions, keyMap, EditorView.lineWrapping] : [...defaultExtensions, keyMap],
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
    singleQuote: true,
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
      <Tooltip :content="`Line Wrap (${isMac ? '⇧ + ⌘ + Z' : 'Shift + Alt + Z'})`" position="left">
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
      <Tooltip class="ml-1" :content="`Format (${isMac ? '⇧ + ⌘ + F' : 'Shift + Alt + F'})`" position="left">
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
