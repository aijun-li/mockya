<script lang="ts" setup>
import { FormInput } from '@/components';
import { Button, Modal } from '@/daisy';
import { useRuleConfigStore } from '@/store';
import { CodeLang } from '@shared/types';
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
const lang = ref(CodeLang.JSON);

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
    const data = await createMock(name.value, lang.value);
    emit('created', data?.id);
    close();
  }
}

function onLangChange(e: Event) {
  lang.value = (e.target as HTMLInputElement).value as CodeLang;
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

      <div class="flex items-center">
        <label class="label">
          <span class="label-text font-semibold text-base">Language</span>
        </label>
        <div class="flex gap-8 ml-8">
          <label class="flex items-center">
            <input
              class="radio radio-sm"
              type="radio"
              name="mock-lang"
              :value="CodeLang.JSON"
              :checked="lang === CodeLang.JSON"
              @change="onLangChange"
            />
            <span class="label-text ml-2 cursor-pointer">JSON</span>
          </label>
          <label class="flex items-center">
            <input
              class="radio radio-sm"
              type="radio"
              name="mock-lang"
              :value="CodeLang.JavaScript"
              :checked="lang === CodeLang.JavaScript"
              @change="onLangChange"
            />
            <span class="label-text ml-2 cursor-pointer">JavaScript</span>
          </label>
        </div>
      </div>
    </template>
    <template #action>
      <Button type="ghost" @click="close">Cancel</Button>
      <Button type="primary" @click="onCreate">Create</Button>
    </template>
  </Modal>
</template>
