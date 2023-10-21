<script lang="ts" setup>
import { Input } from '@/daisy';
import { useRuleConfigStore } from '@/store';
import { Down } from '@icon-park/vue-next';
import { onClickOutside } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import MockListItem from './MockListItem.vue';

interface Props {
  modelValue: number;
  readOnly?: boolean;
}

type Emits = {
  'update:modelValue': [id: number];
  'delete': [id: number];
  'update': [id: number, name: string];
  'change': [id: number];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const { mockList } = useRuleConfigStore();

const selectedMock = computed(() => mockList.value.find((mock) => mock.id === props.modelValue)!);

const keyword = ref('');

const active = ref(false);

const containerRef = ref<HTMLDivElement>();

const inputRef = ref<InstanceType<typeof Input>>();

const filteredList = computed(() => {
  const word = keyword.value.trim().toLowerCase();

  if (!word) {
    return mockList.value;
  }

  return mockList.value.filter((mock) => mock.name.toLowerCase().includes(word));
});

onClickOutside(containerRef, () => {
  active.value = false;
});

watch(active, (val) => {
  keyword.value = '';
  if (val) {
    inputRef.value?.focus();
  }
});

function onSelect(id: number) {
  emit('update:modelValue', id);
  emit('change', id);
  active.value = false;
}

function onDelete(id: number) {
  emit('delete', id);
}

function onUpdate(id: number, name: string) {
  emit('update', id, name);
}

function onInputEsc() {
  active.value = false;
  inputRef.value?.blur();
}
</script>

<template>
  <div ref="containerRef" class="relative w-full">
    <div class="relative">
      <div
        v-if="!active"
        class="flex items-center pl-3 pr-8 inset-0 absolute cursor-pointer text-sm"
        @click="active = true"
      >
        <span class="min-w-0 truncate">{{ selectedMock?.name ?? '' }}</span>
      </div>
      <Input
        ref="inputRef"
        v-model="keyword"
        class="pr-8"
        :placeholder="active ? 'Search' : ''"
        bordered
        size="sm"
        @focus="active = true"
        @click="active = true"
        @keydown.esc="onInputEsc"
      />
      <Down
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-base-content/50 transition pointer-events-none"
        :class="{
          'transform rotate-180': active,
        }"
      />
    </div>

    <div
      v-show="active"
      class="flex flex-col gap-1 absolute p-2 shadow dropdown-content z-[1] bg-base-100 rounded w-full transform translate-y-2 overflow-auto max-h-60"
    >
      <template v-if="filteredList.length">
        <MockListItem
          v-for="mock in filteredList"
          :key="mock.id"
          :mock="mock"
          :selected="mock.id === modelValue"
          :dropdown-open="active"
          :read-only="readOnly"
          @click="onSelect(mock.id)"
          @delete="onDelete(mock.id)"
          @edit-confirm="onUpdate(mock.id, $event)"
        />
      </template>
      <div v-else class="flex-center py-2 text-sm">No Data</div>
    </div>
  </div>
</template>
