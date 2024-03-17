<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed } from 'vue';

interface Props {
  size?: ISize | 'xxs';
  type?: IColorType | 'ghost';
  outline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});

const classNames = computed(() => ({
  'badge': true,
  'badge-primary': props.type === 'primary',
  'badge-secondary': props.type === 'secondary',
  'badge-accent': props.type === 'accent',
  'badge-info': props.type === 'info',
  'badge-success': props.type === 'success',
  'badge-warning': props.type === 'warning',
  'badge-error': props.type === 'error',
  'badge-neutral': props.type === 'neutral',
  'badge-ghost': props.type === 'ghost',
  'badge-outline': !!props.outline,
  'badge-xs': props.size === 'xs',
  'badge-sm': props.size === 'sm',
  'badge-md': props.size === 'md',
  'badge-lg': props.size === 'lg',
}));
</script>

<template>
  <span :class="[classNames, props.size === 'xxs' && 'w-2 h-2 p-0']">
    <slot />
  </span>
</template>
