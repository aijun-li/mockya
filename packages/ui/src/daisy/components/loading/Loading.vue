<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed } from 'vue';
import { LoadingShape } from './types';

interface Props {
  shape?: LoadingShape;
  type?: IColorType;
  size?: ISize;
}

const props = withDefaults(defineProps<Props>(), {
  shape: 'spinner',
  size: 'md',
});

const classNames = computed(() => ({
  'loading': true,
  'loading-spinner': props.shape === 'spinner',
  'loading-dots': props.shape === 'dots',
  'loading-ring': props.shape === 'ring',
  'loading-ball': props.shape === 'ball',
  'loading-bars': props.shape === 'bars',
  'loading-infinity': props.shape === 'infinity',
  'loading-xs': props.size === 'xs',
  'loading-sm': props.size === 'sm',
  'loading-md': props.size === 'md',
  'loading-lg': props.size === 'lg',
  'text-neutral': props.type === 'neutral',
  'text-primary': props.type === 'primary',
  'text-secondary': props.type === 'secondary',
  'text-accent': props.type === 'accent',
  'text-info': props.type === 'info',
  'text-success': props.type === 'success',
  'text-warning': props.type === 'warning',
  'text-error': props.type === 'error',
}));
</script>

<template>
  <div :class="classNames" />
</template>
