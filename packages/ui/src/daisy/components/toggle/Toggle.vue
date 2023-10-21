<script lang="ts" setup>
import { ISize } from '@/daisy/types';
import { ToggleColor } from './types';
import { computed } from 'vue';

interface Props {
  modelValue: boolean;
  type?: ToggleColor;
  size?: ISize;
  disabled?: boolean;
}

type Emits = {
  'update:modelValue': [value: boolean];
  'change': [value: boolean];
};

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
  disabled: false,
});

const emit = defineEmits<Emits>();

const classNames = computed(() => ({
  'toggle': true,
  'toggle-primary': props.type === 'primary',
  'toggle-secondary': props.type === 'secondary',
  'toggle-accent': props.type === 'accent',
  'toggle-info': props.type === 'info',
  'toggle-success': props.type === 'success',
  'toggle-warning': props.type === 'warning',
  'toggle-error': props.type === 'error',
  'toggle-xs': props.size === 'xs',
  'toggle-sm': props.size === 'sm',
  'toggle-md': props.size === 'md',
  'toggle-lg': props.size === 'lg',
}));

function onInput(event: Event) {
  const newValue = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', newValue);
  emit('change', newValue);
}
</script>

<template>
  <input :class="classNames" :checked="modelValue" type="checkbox" :disabled="disabled" @input="onInput" />
</template>
