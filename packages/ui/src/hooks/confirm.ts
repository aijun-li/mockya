import { useTimeoutFn } from '@vueuse/core';
import { ref } from 'vue';

export function useConfirm(callback: () => unknown, delay = 1500) {
  const confirmed = ref(false);

  const { start, stop } = useTimeoutFn(() => {
    confirmed.value = false;
  }, delay);

  function trigger() {
    if (confirmed.value) {
      stop();
      callback();
    } else {
      confirmed.value = true;
      start();
    }
  }

  function cancel() {
    confirmed.value = false;
  }

  return {
    confirmed,
    trigger,
    cancel,
  };
}
