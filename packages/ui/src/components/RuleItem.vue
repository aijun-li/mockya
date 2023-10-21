<script lang="ts" setup>
import { IconButton } from '@/components';
import { Input } from '@/daisy';
import { useConfirm } from '@/hooks';
import { BaseRule } from '@/types';
import { Check, Close, Delete, Dot, Edit, FileCode } from '@icon-park/vue-next';
import { whenever } from '@vueuse/core';
import { nextTick, ref } from 'vue';

defineExpose({
  focusEdit,
});

interface Props {
  rule: BaseRule;
  initEdit?: boolean;
  selected?: boolean;
}

type Emits = {
  'edit-confirm': [name: string];
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

whenever(editActive, () => {
  editName.value = props.rule.name;
  nextTick(() => {
    focusEdit();
  });
});

function onEditConfirm() {
  emit('edit-confirm', editName.value);
  editActive.value = false;
}

function onEditCancel() {
  emit('edit-cancel');
  editActive.value = false;
}

function focusEdit() {
  inputRef.value?.focus();
  inputRef.value?.select();
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
      'hover:bg-base-200/80': !selected,
      'bg-primary-content/30': selected,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <FileCode
      :class="{
        'mr-1': editActive,
        'mr-2': !editActive,
      }"
      :size="14"
      @click="onIconClick"
    />

    <template v-if="!editActive">
      <div class="flex-1 truncate mr-1">
        {{ rule.name }}
      </div>

      <template v-if="hovered">
        <IconButton transparent @click.stop="editActive = true">
          <Edit />
        </IconButton>
        <IconButton transparent :danger="deleteConfirmed" @click.stop="tryDelete" @mouseleave="cancelDelete">
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
        @click.stop
        @keydown.enter="onEditConfirm"
        @keydown.esc="onEditCancel"
      />
      <IconButton class="ml-2" transparent @click.stop="onEditConfirm">
        <Check />
      </IconButton>
      <IconButton transparent @click.stop="onEditCancel">
        <Close />
      </IconButton>
    </template>

    <Dot class="ml-1" :class="[rule.enabled ? 'text-success' : 'text-base-300']" />
  </div>
</template>
