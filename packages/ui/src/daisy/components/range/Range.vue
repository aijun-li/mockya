<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed, defineModel } from 'vue';

interface Props {
  size?: ISize;
  type?: Exclude<IColorType, 'neutral'>;
  min?: number;
  max?: number;
  step?: number;
}

type Emits = {
  input: [number];
};

const props = withDefaults(defineProps<Props>(), {
  size: 'xs',
  min: 0,
  max: 100,
});

const emit = defineEmits<Emits>();

const model = defineModel<number>({ required: true });

const classNames = computed(() => ({
  'range': true,
  'range-primary': props.type === 'primary',
  'range-secondary': props.type === 'secondary',
  'range-accent': props.type === 'accent',
  'range-info': props.type === 'info',
  'range-success': props.type === 'success',
  'range-warning': props.type === 'warning',
  'range-error': props.type === 'error',
  'range-xs': props.size === 'xs',
  'range-sm': props.size === 'sm',
  'range-md': props.size === 'md',
  'range-lg': props.size === 'lg',
}));

function onInput(e: Event) {
  const val = Number((e.target as HTMLInputElement).value);
  model.value = val;
  emit('input', val);
}
</script>

<template>
  <input :value="model" :class="classNames" :min="min" :max="max" :step="step" type="range" @input="onInput" />
</template>
