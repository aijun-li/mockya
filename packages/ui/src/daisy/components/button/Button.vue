<script lang="ts" setup>
import { ISize } from '@/daisy/types';
import { computed } from 'vue';
import { ButtonShape, ButtonType } from './types';

interface Props {
  type?: ButtonType;
  size?: ISize;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  glass?: boolean;
  noAnimation?: boolean;
  wide?: boolean;
  block?: boolean;
  shape?: ButtonShape;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});

const classNames = computed(() => ({
  'btn': true,
  'btn-neutral': props.type === 'neutral',
  'btn-primary': props.type === 'primary',
  'btn-secondary': props.type === 'secondary',
  'btn-accent': props.type === 'accent',
  'btn-info': props.type === 'info',
  'btn-success': props.type === 'success',
  'btn-warning': props.type === 'warning',
  'btn-error': props.type === 'error',
  'btn-ghost': props.type === 'ghost',
  'btn-link': props.type === 'link',
  'btn-outline': !!props.outline,
  'btn-active': !!props.active,
  'btn-disabled': !!props.disabled,
  'glass': !!props.glass,
  'no-animation': !!props.noAnimation,
  'btn-xs': props.size === 'xs',
  'btn-sm': props.size === 'sm',
  'btn-md': props.size === 'md',
  'btn-lg': props.size === 'lg',
  'btn-wide': !!props.wide,
  'btn-block': !!props.block,
  'btn-circle': props.shape === 'circle',
  'btn-square': props.shape === 'square',
}));
</script>

<template>
  <button :class="classNames" class="rounded">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-ghost {
  @apply hover:bg-base-200;
}
</style>
