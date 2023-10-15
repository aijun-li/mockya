<script lang="ts" setup>
import { IconButton } from '@/components';
import { Input } from '@/daisy';
import { useConfirm } from '@/hooks';
import { Rule } from '@/types';
import { Check, Close, Delete, Edit, FileCode } from '@icon-park/vue-next';
import { whenever } from '@vueuse/core';
import { nextTick, ref } from 'vue';

defineExpose({
  focusEdit,
});

interface Props {
  rule: Rule;
  initEdit?: boolean;
  selected?: boolean;
}

type Emits = {
  'edit-confirm': [name: string, exitActive: () => void];
  'edit-cancel': [];
  'delete': [];
};

const props = withDefaults(defineProps<Props>(), {
  initEdit: false,
  selected: false,
});

const emit = defineEmits<Emits>();

const editActive = ref(props.initEdit);

const editName = ref(props.rule.name);

const inputRef = ref<InstanceType<typeof Input>>();

const hovered = ref(false);

const {
  confirmed: deleteConfirmed,
  trigger: tryDelete,
  cancel: cancelDelete,
} = useConfirm(() => {
  emit('delete');
});

function trys() {
  console.log('try delete', deleteConfirmed.value);
  tryDelete();
}

whenever(editActive, () => {
  editName.value = props.rule.name;
  nextTick(() => {
    focusEdit();
  });
});

function onEditConfirm() {
  emit('edit-confirm', editName.value, exitEdit);
}

function onEditCancel() {
  exitEdit();
  emit('edit-cancel');
}

function focusEdit() {
  inputRef.value?.focus();
  inputRef.value?.select();
}

function exitEdit() {
  editActive.value = false;
}

function onIconClick(e: Event) {
  if (editActive.value) {
    e.stopPropagation();
    focusEdit();
  }
}
</script>

<template>
  <div
    class="flex items-center text-xs leading-6 cursor-pointer py-1 px-2 rounded"
    :class="{
      'hover:bg-base-200': !editActive && !selected,
      'bg-primary-content/40': selected,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <FileCode :class="editActive ? 'mr-1' : 'mr-2'" :size="14" @click="onIconClick" />

    <template v-if="!editActive">
      <div class="flex-1 truncate mr-1">{{ rule.name }}</div>

      <template v-if="hovered">
        <IconButton class="mr-1 hover:!bg-transparent" transparent @click.stop="editActive = true">
          <Edit />
        </IconButton>
        <IconButton
          :class="{
            'hover:!bg-transparent': !deleteConfirmed,
            '!bg-error text-base-100': deleteConfirmed,
          }"
          @click.stop="trys"
          @mouseleave="cancelDelete"
        >
          <Delete />
        </IconButton>
      </template>
    </template>

    <template v-else>
      <Input
        ref="inputRef"
        v-model="editName"
        class="flex-1 text-xs px-1 rounded"
        size="xs"
        bordered
        @keydown.enter="onEditConfirm"
        @keydown.esc="onEditCancel"
      />
      <IconButton class="ml-1" @click.stop="onEditConfirm">
        <Check />
      </IconButton>
      <IconButton class="ml-1" @click.stop="onEditCancel">
        <Close />
      </IconButton>
    </template>
  </div>
</template>
