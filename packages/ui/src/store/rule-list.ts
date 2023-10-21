import { trpc } from '@/service';
import { BaseRule } from '@/types';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useDetailStore } from './detail';

export const useRuleListStore = withRefs(
  defineStore('rule-list', () => {
    const { collectionId } = useDetailStore();

    const selectedRuleId = ref(0);
    const rules = ref<BaseRule[]>([]);

    watch(collectionId, fetchRuleList);

    async function fetchRuleList() {
      if (!collectionId.value) {
        return;
      }

      try {
        const list = await trpc.getRuleList.query(collectionId.value);
        rules.value = list;
      } catch (error) {
        handleError(error);
      }
    }

    async function createRule(name: string) {
      try {
        await trpc.createRule.mutate({
          collectionId: collectionId.value,
          name,
        });
        await fetchRuleList();
      } catch (error) {
        handleError(error);
      }
    }

    async function updateRule(params: { id: number; name: string }) {
      try {
        await trpc.updateRule.mutate(params);
        // await fetchRuleList();
      } catch (error) {
        handleError(error);
      }
    }

    async function deleteRule(id: number) {
      try {
        await trpc.deleteRule.mutate(id);
        await fetchRuleList();
      } catch (error) {
        handleError(error);
      }
    }

    return {
      selectedRuleId,
      rules,
      fetchRuleList,
      createRule,
      updateRule,
      deleteRule,
    };
  }),
);
