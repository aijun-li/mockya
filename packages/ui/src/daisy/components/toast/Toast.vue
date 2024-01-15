<script lang="ts" setup>
import { Attention, CheckOne, CloseOne, Info } from '@icon-park/vue-next';
import { computed, onMounted, ref } from 'vue';
import { ToastProps } from './types';

const props = withDefaults(defineProps<ToastProps>(), {
  position: 'top-center',
  duration: 1500,
  offset: 0,
});

const render = ref(false);

const position = computed(() => props.position.split('-'));
const vPosition = computed(() => position.value[0]);
const hPosition = computed(() => position.value[1]);

const Icon = computed(
  () =>
    ({
      success: CheckOne,
      error: CloseOne,
      info: Info,
      warning: Attention,
    })[props.type],
);

const toastClassNames = computed(() => ({
  'toast': true,
  'toast-top': vPosition.value === 'top',
  'toast-bottom': vPosition.value === 'bottom',
  'toast-start': hPosition.value === 'start',
  'toast-center': hPosition.value === 'center',
  'toast-end': hPosition.value === 'end',
  'p-1': true,
  'z-[9999]': true,
}));

const alertClassNames = computed(() => ({
  'alert': true,
  'alert-info': props.type === 'info',
  'alert-error': props.type === 'error',
  'alert-warning': props.type === 'warning',
  'alert-success': props.type === 'success',
  'py-2': true,
}));

const style = computed(() => ({
  [vPosition.value]: `${props.offset}px`,
}));

const transitionPrefix = computed(() => {
  if (hPosition.value === 'center') {
    return `toast-${props.position}`;
  } else {
    return `toast-${hPosition.value}`;
  }
});

onMounted(() => {
  render.value = true;
  startTimer();
});

function startTimer() {
  setTimeout(() => {
    closeToast();
  }, props.duration);
}

function closeToast() {
  render.value = false;
}
</script>

<template>
  <Transition :name="transitionPrefix" @before-leave="onClose" @after-leave="onDestroy">
    <div v-show="render" :class="toastClassNames" :style="style">
      <div :class="alertClassNames" class="grid-cols-[unset] text-left">
        <div class="flex items-start max-w-[75vw] w-max">
          <div class="h-5 flex-center flex-none">
            <Component :is="Icon" />
          </div>
          <div class="ml-1 text-sm whitespace-pre-wrap break-all">{{ content }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.toast-top-center-enter-from,
.toast-top-center-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.toast-bottom-center-enter-from,
.toast-bottom-center-leave-to {
  opacity: 0;
  transform: translate(-50%, 100%);
}

.toast-start-enter-from,
.toast-start-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.toast-end-enter-from,
.toast-end-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast {
  transition: all 0.2s ease-in-out;
}
</style>
