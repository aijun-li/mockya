<script lang="ts" setup>
import { IColorType } from '@/daisy/types';
import { computed } from 'vue';

interface Props {
  type?: Exclude<IColorType, 'neutral'>;
  content?: string;
  open?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  content: '',
  disabled: false,
});

const classNames = computed(() => ({
  'tooltip': true,
  'tooltip-open': props.open,
  'tooltip-top': props.position === 'top',
  'tooltip-bottom': props.position === 'bottom',
  'tooltip-left': props.position === 'left',
  'tooltip-right': props.position === 'right',
  'tooltip-primary': props.type === 'primary',
  'tooltip-secondary': props.type === 'secondary',
  'tooltip-accent': props.type === 'accent',
  'tooltip-info': props.type === 'info',
  'tooltip-success': props.type === 'success',
  'tooltip-warning': props.type === 'warning',
  'tooltip-error': props.type === 'error',
}));

const tooltipDisabled = computed(() => !props.content || props.disabled);
</script>

<template>
  <div :class="tooltipDisabled ? {} : classNames" :data-tip="content">
    <slot />
  </div>
</template>
