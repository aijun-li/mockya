import { withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCommandPaletteStore = withRefs(
  defineStore('command-palette', () => {
    const visible = ref(false);

    return {
      visible,
    };
  }),
);
