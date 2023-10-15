<script lang="ts" setup>
import { Input, Tooltip } from '@/daisy';
import { computed, ref } from 'vue';
import { Help } from '@icon-park/vue-next';

defineExpose({
  validate,
  clearValidation,
  focus,
});

interface Props {
  modelValue: string;
  title: string;
  placeholder?: string;
  tip?: string;
  validateFn?: (val: string) => string;
}

type Emits = {
  'update:modelValue': [string];
  'change': [string];
  'input': [string];
};

const props = withDefaults(defineProps<Props>(), {
  tip: '',
  placeholder: '',
});

const emit = defineEmits<Emits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const errorInfo = ref('');

const input = ref<InstanceType<typeof Input> | null>(null);

function focus() {
  input.value?.focus();
}

function validate() {
  errorInfo.value = props.validateFn?.(props.modelValue) ?? '';
  return !errorInfo.value;
}

function clearValidation() {
  errorInfo.value = '';
}

function onChange(val: string) {
  emit('change', val);
}

function onInput(val: string) {
  errorInfo.value = props.validateFn?.(val) ?? '';
  emit('input', val);
}
</script>

<template>
  <div class="form-control w-full">
    <label class="label">
      <div class="inline-flex items-center">
        <span class="label-text font-semibold text-base">{{ title }}</span>
        <Tooltip v-if="tip" class="ml-1" :content="tip" position="right">
          <Help :size="14" />
        </Tooltip>
      </div>
    </label>
    <Input
      ref="input"
      v-model="value"
      :class="{ 'text-error': !!errorInfo }"
      :placeholder="placeholder"
      size="sm"
      bordered
      :type="errorInfo ? 'error' : undefined"
      @change="onChange"
      @input="onInput"
    />
    <label class="label font-semibold pb-0">
      <span class="label-text-alt" :class="{ 'text-error': !!errorInfo }">
        {{ errorInfo || '&nbsp;' }}
      </span>
    </label>
  </div>
</template>
