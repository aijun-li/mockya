<script lang="ts" setup>
import { Button } from '@/daisy';
import { computed, ref, watchEffect } from 'vue';
import { ModalPosition } from './types';

interface Props {
  modelValue: boolean;
  useTopLayer?: boolean;
  title?: string;
  showClose?: boolean;
  position?: ModalPosition;
  closeOnBackdrop?: boolean;
}

type Emits = {
  'update:modelValue': [boolean];
};

interface Slots {
  default: () => void;
  action?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  useTopLayer: false,
  showClose: true,
  closeOnBackdrop: true,
  position: 'middle',
});

const emit = defineEmits<Emits>();

const slots = defineSlots<Slots>();

const dialogRef = ref<HTMLDialogElement | null>(null);

const modalPositionClass = computed(
  () =>
    ({
      top: 'modal-top',
      bottom: 'modal-bottom',
      middle: 'modal-middle',
    })[props.position],
);

function closeModal() {
  emit('update:modelValue', false);
}

function closeModalManually() {
  if (!props.useTopLayer) {
    closeModal();
  }
}

watchEffect(() => {
  if (!dialogRef.value || !props.useTopLayer) {
    return;
  }
  if (props.modelValue && !dialogRef.value.open) {
    dialogRef.value.showModal();
  } else if (!props.modelValue && dialogRef.value.open) {
    dialogRef.value.close();
  }
});
</script>

<template>
  <dialog
    ref="dialogRef"
    :class="['modal', modalPositionClass, !useTopLayer && modelValue && 'modal-open']"
    @close="closeModal"
  >
    <form method="dialog" class="modal-box flex flex-col">
      <Button v-if="showClose" class="absolute right-2 top-2" shape="circle" type="ghost" @click="closeModalManually">
        ✕
      </Button>
      <h3 v-if="title" class="font-bold text-lg">{{ title }}</h3>
      <div class="content py-4"><slot /></div>
      <div v-if="slots.action" class="modal-action">
        <slot name="action" />
      </div>
    </form>
    <form v-if="closeOnBackdrop" method="dialog" class="modal-backdrop">
      <button @click="closeModalManually">close</button>
    </form>
  </dialog>
</template>
