import { trpc } from '@/service';
import { BaseRule } from '@/types';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';
import { useDetailStore } from './detail';

export const useRuleListStore = withRefs(
  defineStore('rule-list', () => {
    const { collectionId } = useDetailStore();

    const selectedRuleId = ref(0);
    const rules = ref<BaseRule[]>([]);
    const loading = ref(true);

    const markedRuleIds = reactive(new Set<number>());

    watch(collectionId, async () => {
      rules.value = [];
      selectedRuleId.value = 0;
      loading.value = true;
      await fetchRuleList();
      loading.value = false;
    });

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
        const data = await trpc.createRule.mutate({
          collectionId: collectionId.value,
          name,
        });
        await fetchRuleList();
        return data;
      } catch (error) {
        handleError(error);
      }
    }

    async function updateRule(params: { id: number; name?: string; enabled?: boolean }) {
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
        if (id === selectedRuleId.value) {
          selectedRuleId.value = 0;
        }
      } catch (error) {
        handleError(error);
      }
    }

    function markRule(id: number) {
      markedRuleIds.add(id);
    }

    function unmarkRule(id: number) {
      markedRuleIds.delete(id);
    }

    function checkRuleMarked(id: number) {
      return markedRuleIds.has(id);
    }

    return {
      loading,
      selectedRuleId,
      rules,
      fetchRuleList,
      createRule,
      updateRule,
      deleteRule,

      markRule,
      unmarkRule,
      checkRuleMarked,
    };
  }),
);
