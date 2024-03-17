import { withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';
import { CommandPaletteItem } from '@/types';

export const useCommandPaletteStore = withRefs(
  defineStore('command-palette', () => {
    const visible = ref(false);

    function showCommandPalette() {
      visible.value = true;
    }

    const actionsConfig = ref<Omit<CommandPaletteItem, 'icon'>[]>([]);

    function registerActions(actions: Omit<CommandPaletteItem, 'icon'>[]) {
      onMounted(() => {
        actionsConfig.value.unshift(
          ...actions.map((a) => ({
            ...a,
            perform: () => {
              setTimeout(() => {
                a.perform();
              });
            },
          })),
        );
      });
      onUnmounted(() => {
        const ids = actions.map((a) => a.id);
        actionsConfig.value = actionsConfig.value.filter((a) => !ids.includes(a.id));
      });
    }

    return {
      visible,
      showCommandPalette,
      actionsConfig,
      registerActions,
    };
  }),
);
