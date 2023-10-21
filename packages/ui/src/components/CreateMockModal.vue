<script lang="ts" setup>
import { FormInput } from '@/components';
import { Button, Modal } from '@/daisy';
import { useRuleConfigStore } from '@/store';
import { whenever } from '@vueuse/core';
import { computed, ref } from 'vue';

interface Props {
  modelValue: boolean;
}

type Emits = {
  'update:modelValue': [boolean];
  'created': [id?: number];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const { createMock } = useRuleConfigStore();

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const name = ref('');

const nameInput = ref<InstanceType<typeof FormInput>>();

whenever(visible, () => {
  (name.value = ''), nameInput.value?.clearValidation();

  nameInput.value?.focus();
});

function close() {
  emit('update:modelValue', false);
}

function validateName(name: string) {
  name = name.trim();
  if (name === '') {
    return 'Name cannot be empty';
  }
  return '';
}

async function onCreate() {
  if (nameInput.value?.validate()) {
    const data = await createMock(name.value);
    emit('created', data?.id);
    close();
  }
}
</script>

<template>
  <Modal v-model="visible" title="Create Mock Data">
    <template #default>
      <FormInput
        ref="nameInput"
        v-model="name"
        title="Name"
        :validate-fn="validateName"
        @keydown.enter.prevent="onCreate"
      />
    </template>
    <template #action>
      <Button type="ghost" @click="close">Cancel</Button>
      <Button type="primary" @click="onCreate">Create</Button>
    </template>
  </Modal>
</template>
