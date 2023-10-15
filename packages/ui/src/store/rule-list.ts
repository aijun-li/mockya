import { trpc } from '@/service';

import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { useDetailStore } from './detail';

export const useRuleListStore = withRefs(
  defineStore('rule-list', {
    state: () => ({
      selectedRuleId: 0,
    }),
    getters: {
      collectionId() {
        const { collectionId } = useDetailStore();
        return collectionId.value;
      },
      rules() {
        const { rules } = useDetailStore();
        return rules.value;
      },
    },
    actions: {
      async createRule(name: string) {
        const { fetchDetail } = useDetailStore();

        try {
          await trpc.createRule.mutate({
            collectionId: this.collectionId,
            name,
          });
          await fetchDetail();
        } catch (error) {
          handleError(error);
        }
      },

      async updateRule(params: { id: number; name: string }) {
        const { fetchDetail } = useDetailStore();

        try {
          await trpc.updateRule.mutate(params);
          await fetchDetail();
        } catch (error) {
          handleError(error);
        }
      },

      async deleteRule(id: number) {
        const { fetchDetail } = useDetailStore();

        try {
          await trpc.deleteRule.mutate(id);
          await fetchDetail();
        } catch (error) {
          handleError(error);
        }
      },
    },
  }),
);
