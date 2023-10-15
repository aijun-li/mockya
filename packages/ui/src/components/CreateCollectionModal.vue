<script lang="ts" setup>
import { FormInput } from '@/components';
import { Button, Modal } from '@/daisy';
import { useCollectionsStore } from '@/store';
import { whenever } from '@vueuse/core';
import { computed, reactive, ref } from 'vue';

interface Props {
  modelValue: boolean;
}

type Emits = {
  'update:modelValue': [boolean];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const params = reactive({
  id: '',
  name: '',
});

const { checkIdDuplicated, upsertCollection } = useCollectionsStore();

const idInput = ref<InstanceType<typeof FormInput> | null>(null);
const nameInput = ref<InstanceType<typeof FormInput> | null>(null);

whenever(visible, () => {
  params.id = '';
  params.name = '';

  idInput.value?.clearValidation();
  nameInput.value?.clearValidation();

  idInput.value?.focus();
});

function validateID(id: string) {
  id = id.trim();
  if (id === '') {
    return 'ID cannot be empty';
  }
  if (/\s+/.test(id)) {
    return 'ID cannot contain space';
  }
  if (checkIdDuplicated(id)) {
    return 'ID already exists';
  }
  return '';
}

function validateName(name: string) {
  name = name.trim();
  if (name === '') {
    return 'Name cannot be empty';
  }
  return '';
}

async function onCreate() {
  const idValid = idInput.value?.validate();
  const nameValid = nameInput.value?.validate();

  if (idValid && nameValid) {
    await upsertCollection(params);
    close();
  }
}

function close() {
  emit('update:modelValue', false);
}
</script>

<template>
  <Modal v-model="visible" title="Create Collection">
    <template #default>
      <FormInput
        ref="idInput"
        v-model="params.id"
        title="ID"
        tip="unique string without space"
        :validate-fn="validateID"
        @keydown.enter.prevent="nameInput?.focus()"
      />
      <FormInput
        ref="nameInput"
        v-model="params.name"
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
