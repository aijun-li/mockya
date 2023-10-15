<script lang="tsx" setup>
import { IconButton } from '@/components';
import { Input, Tooltip, toast } from '@/daisy';
import { useConfirm } from '@/hooks';
import { useCollectionsStore } from '@/store';
import { BaseCollection } from '@/types';
import { Delete, Edit, Key, Time } from '@icon-park/vue-next';
import { whenever } from '@vueuse/core';
import copy from 'copy-to-clipboard';
import dayjs from 'dayjs';
import { computed, nextTick, ref } from 'vue';

interface Props {
  collection: BaseCollection;
}

const props = defineProps<Props>();

const { deleteCollection, upsertCollection } = useCollectionsStore();

const modifiedTime = computed(() => dayjs(props.collection.updatedAt).fromNow());

const {
  confirmed: deleteConfirmed,
  trigger: tryDelete,
  cancel: cancelDelete,
} = useConfirm(() => {
  deleteCollection(props.collection.id);
});

const editActive = ref(false);
const editValue = ref(props.collection.name);
const editInput = ref<InstanceType<typeof Input> | null>(null);

whenever(editActive, () => {
  editValue.value = props.collection.name;
  nextTick(() => {
    editInput.value?.focus();
    editInput.value?.select();
  });
});

async function onNameChange() {
  const newName = editValue.value.trim();

  if (newName && newName !== props.collection.name) {
    await upsertCollection({
      id: props.collection.id,
      name: newName,
    });
  }

  editActive.value = false;
}

function copyID() {
  copy(props.collection.id);
  toast.success(`ID "${props.collection.id}" Copied!`);
}
</script>

<template>
  <div class="collection-card transition-hover">
    <div class="flex justify-between">
      <Tooltip class="id-tooltip w-fit" content="Copy ID" position="right">
        <div class="id-marker transition-hover" @click.stop="copyID">
          <div class="id-icon-container transition-hover flex-center bg-base-300 h-full px-1 rounded-l">
            <Key class="id-icon transition-hover hover:text-base-100" />
          </div>
          <div class="mx-2 truncate max-w-50 text-sm">{{ collection.id }}</div>
        </div>
      </Tooltip>

      <div class="operation-list flex-center gap-1 transition-hover opacity-0">
        <IconButton @click.stop="editActive = true">
          <Edit />
        </IconButton>
        <IconButton
          class="delete-btn"
          :class="{ '!bg-error text-base-100': deleteConfirmed }"
          @click.stop="tryDelete"
          @mouseleave="cancelDelete"
        >
          <Delete />
        </IconButton>
      </div>
    </div>

    <div v-if="!editActive" class="flex-1 py-2 font-semibold text-lg truncate">
      {{ collection.name }}
    </div>
    <div v-else class="flex-1 py-2" @click.stop>
      <Input
        ref="editInput"
        v-model="editValue"
        bordered
        size="sm"
        @blur="onNameChange"
        @keydown.enter="onNameChange"
      />
    </div>

    <div class="text-xs flex w-fit items-center text-neural">
      <Time class="mr-2" />
      {{ modifiedTime }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection-card {
  @apply border rounded p-4 flex flex-col min-h-35;
  @apply hover:shadow-elevate hover:cursor-pointer;

  &:hover {
    .id-icon-container {
      @apply bg-primary;
    }
    .id-icon {
      @apply text-base-100;
    }
    .operation-list {
      @apply opacity-100;
    }
  }

  .id-marker {
    @apply w-fit flex items-center bg-base-200 rounded h-full hover:shadow overflow-hidden;
  }

  .id-tooltip::before {
    @apply duration-500 delay-0;
  }
}

.transition-hover {
  @apply transition duration-500;
}
</style>
