<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed, ref } from 'vue';

defineExpose({
  focus,
  blur,
  select,
});

interface Props {
  modelValue: string;
  placeholder?: string;
  size?: ISize;
  type?: Exclude<IColorType, 'neutral'> | 'ghost';
  bordered?: boolean;
}

type Emits = {
  'update:modelValue': [string];
  'change': [string];
  'input': [string];
};

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
});

const emit = defineEmits<Emits>();

const classNames = computed(() => ({
  'input': true,
  'input-primary': props.type === 'primary',
  'input-secondary': props.type === 'secondary',
  'input-accent': props.type === 'accent',
  'input-info': props.type === 'info',
  'input-success': props.type === 'success',
  'input-warning': props.type === 'warning',
  'input-error': props.type === 'error',
  'input-ghost': props.type === 'ghost',
  'input-bordered': !!props.bordered,
  'input-xs': props.size === 'xs',
  'input-sm': props.size === 'sm',
  'input-md': props.size === 'md',
  'input-lg': props.size === 'lg',
}));

const input = ref<HTMLInputElement | null>(null);

function focus() {
  input.value?.focus();
}

function blur() {
  input.value?.blur();
}

function select() {
  return input.value?.select();
}

function onChange(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('change', value);
}

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('input', value);
  emit('update:modelValue', value);
}
</script>

<template>
  <input
    ref="input"
    :value="modelValue"
    class="w-full"
    :class="classNames"
    :placeholder="placeholder"
    type="text"
    @change="onChange"
    @input="onInput"
  />
</template>
