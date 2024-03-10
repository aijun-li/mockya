<script lang="ts" setup>
import { Input } from '@/daisy';
import { useConfirm } from '@/hooks';
import { BaseMock } from '@/types';
import { Check, Close, Delete, Edit } from '@icon-park/vue-next';
import { CodeLang } from '@shared/types';
import { whenever } from '@vueuse/core';
import { computed, nextTick, ref } from 'vue';
import { IconButton } from '.';

interface Props {
  mock: BaseMock;
  selected: boolean;
  dropdownOpen: boolean;
  readOnly?: boolean;
}

type Emits = {
  'edit-confirm': [name: string];
  'delete': [];
};

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const editActive = ref(false);

const hovered = ref(false);

const inputRef = ref<InstanceType<typeof Input>>();

const editName = ref(props.mock.name);

const isDefaultMock = computed(() => props.mock.default);

const {
  confirmed: deleteConfirmed,
  trigger: tryDelete,
  cancel: cancelDelete,
} = useConfirm(() => {
  emit('delete');
});

whenever(editActive, () => {
  editName.value = props.mock.name;

  nextTick(() => {
    inputRef.value?.focus();
    inputRef.value?.select();
  });
});

whenever(
  () => !props.dropdownOpen,
  () => {
    editActive.value = false;
  },
);

function onEditConfirm() {
  const newName = editName.value.trim();

  if (newName) {
    emit('edit-confirm', newName);
  }

  editActive.value = false;
}

function onEditCancel() {
  editActive.value = false;
}
</script>

<template>
  <div
    class="py-1 px-2 flex items-center leading-6 cursor-pointer rounded"
    :class="{
      'hover:bg-base-200/80': !selected,
      'bg-primary-content/30': selected,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div v-if="!editActive" class="flex-1 min-w-0 truncate text-sm leading-6">
      <span>{{ mock.name }}</span>
      <span
        class="ml-2 text-xs"
        :class="{
          'text-info': mock.lang === CodeLang.JSON,
          'text-warning': mock.lang === CodeLang.JavaScript,
        }"
      >
        {{ mock.lang === CodeLang.JSON ? 'JSON' : 'JS' }}
      </span>
    </div>
    <Input
      v-else
      ref="inputRef"
      v-model="editName"
      class="flex-1 text-xs px-1 rounded"
      size="xs"
      bordered
      @click.stop
      @keydown.enter="onEditConfirm"
      @keydown.esc="onEditCancel"
    />

    <template v-if="readOnly || !editActive">
      <template v-if="hovered && !isDefaultMock && !readOnly">
        <IconButton class="ml-2" transparent @click.stop="editActive = true">
          <Edit />
        </IconButton>
        <IconButton transparent :danger="deleteConfirmed" @click.stop="tryDelete" @mouseleave="cancelDelete">
          <Delete />
        </IconButton>
      </template>
    </template>

    <template v-else>
      <IconButton class="ml-2" transparent @click.stop="onEditConfirm">
        <Check />
      </IconButton>
      <IconButton transparent @click.stop="onEditCancel">
        <Close />
      </IconButton>
    </template>
  </div>
</template>
