<script lang="ts" setup>
import { IColorType } from '@/daisy/types';
import { computed } from 'vue';

interface Props {
  type?: IColorType;
  direction?: 'vertical' | 'horizontal';
  textPosition?: 'start' | 'end';
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'vertical',
});

const classNames = computed(() => ({
  'divider': true,
  'divider-neutral': props.type === 'neutral',
  'divider-primary': props.type === 'primary',
  'divider-secondary': props.type === 'secondary',
  'divider-accent': props.type === 'accent',
  'divider-info': props.type === 'info',
  'divider-success': props.type === 'success',
  'divider-warning': props.type === 'warning',
  'divider-error': props.type === 'error',
  'divider-vertical': props.direction === 'vertical',
  'divider-horizontal': props.direction === 'horizontal',
  'divider-start': props.textPosition === 'start',
  'divider-end': props.textPosition === 'end',
  'w-full': props.direction === 'vertical',
}));
</script>

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>
