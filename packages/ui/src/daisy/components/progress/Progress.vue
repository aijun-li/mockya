<script lang="ts" setup>
import { computed } from 'vue';
import { ProgressColorType } from './types';

export interface Props {
  value?: number;
  max?: number;
  type?: ProgressColorType;
}

const props = defineProps<Props>();

const classNames = computed(() => ({
  'w-56': true,
  'progress': true,
  'progress-primary': props.type === 'primary',
  'progress-secondary': props.type === 'secondary',
  'progress-accent': props.type === 'accent',
  'progress-info': props.type === 'info',
  'progress-success': props.type === 'success',
  'progress-warning': props.type === 'warning',
  'progress-error': props.type === 'error',
}));
</script>

<template>
  <progress :class="classNames" :value="props.value" :max="props.max" />
</template>
