import { trpc } from '@/service';
import { MatcherUpdateCondition } from '@/types';
import { BaseRuleConfig, Rule } from '@/types/rule';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRuleListStore } from '.';

export const useRuleConfigStore = withRefs(
  defineStore('rule-config', () => {
    const { selectedRuleId } = useRuleListStore();
    const selectedRule = ref<Rule>();

    const mockList = computed(() => selectedRule.value?.mocks ?? []);
    const matcherList = computed(() => selectedRule.value?.matchers ?? []);

    watch(selectedRuleId, fetchRuleConfig);

    async function fetchRuleConfig() {
      if (!selectedRuleId.value) {
        selectedRule.value = undefined;
        return;
      }

      try {
        const data = await trpc.getRuleFull.query(selectedRuleId.value);
        selectedRule.value = data;
      } catch (error) {
        handleError(error);
      }
    }

    async function updateRuleConfig(config: Partial<BaseRuleConfig>) {
      try {
        await trpc.updateRule.mutate({
          id: selectedRuleId.value,
          ...config,
        });
      } catch (error) {
        handleError(error);
      }
    }

    async function createMock(name: string) {
      try {
        const data = await trpc.createMock.mutate({
          name,
          ruleId: selectedRuleId.value,
        });
        await fetchRuleConfig();
        return data;
      } catch (error) {
        handleError(error);
      }
    }

    async function deleteMock(id: number) {
      try {
        await trpc.deleteMock.mutate(id);
        await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function updateMock(params: { id: number; name?: string; body?: string }) {
      try {
        await trpc.updateMock.mutate(params);
        // await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function createMatcher() {
      try {
        await trpc.createMatcher.mutate(selectedRuleId.value);
        await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function updateMatcher(params: { id: number; mockId?: number; delay?: number }) {
      try {
        await trpc.updateMatcher.mutate(params);
        // await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function deleteMatcher(id: number) {
      try {
        await trpc.deleteMatcher.mutate(id);
        await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function createMatcherCondition(matcherId: number) {
      try {
        await trpc.createMatcherCondition.mutate(matcherId);
        await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function updateMatcherCondition(params: MatcherUpdateCondition) {
      try {
        await trpc.updateMatcherCondition.mutate(params);
        // await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    async function deleteMatcherCondition(id: number) {
      try {
        await trpc.deleteMatcherCondition.mutate(id);
        await fetchRuleConfig();
      } catch (error) {
        handleError(error);
      }
    }

    return {
      selectedRuleId,
      selectedRule,

      mockList,
      matcherList,

      updateRuleConfig,

      createMock,
      updateMock,
      deleteMock,

      createMatcher,
      updateMatcher,
      deleteMatcher,

      createMatcherCondition,
      updateMatcherCondition,
      deleteMatcherCondition,
    };
  }),
);
