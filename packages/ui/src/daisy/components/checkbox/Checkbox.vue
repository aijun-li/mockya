<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed } from 'vue';

interface Props {
  modelValue: boolean;
  size?: ISize;
  type?: Exclude<IColorType, 'neutral'>;
}

type Emits = {
  'update:modelValue': [boolean];
  'change': [boolean];
};

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
});

const emit = defineEmits<Emits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val: boolean) {
    emit('update:modelValue', val);
  },
});

const classNames = computed(() => ({
  'checkbox': true,
  'checkbox-primary': props.type === 'primary',
  'checkbox-secondary': props.type === 'secondary',
  'checkbox-accent': props.type === 'accent',
  'checkbox-info': props.type === 'info',
  'checkbox-success': props.type === 'success',
  'checkbox-warning': props.type === 'warning',
  'checkbox-error': props.type === 'error',
  'checkbox-xs': props.size === 'xs',
  'checkbox-sm': props.size === 'sm',
  'checkbox-md': props.size === 'md',
  'checkbox-lg': props.size === 'lg',
}));

function onChange(e: Event) {
  const value = (e.target as HTMLInputElement).checked;
  emit('change', value);
}
</script>

<template>
  <input v-model="value" :class="classNames" type="checkbox" @change="onChange" />
</template>
