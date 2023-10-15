import { withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { useRuleListStore } from '.';

export const useRuleConfigStore = withRefs(
  defineStore('rule-config', {
    state: () => ({}),
    getters: {
      selectedRuleid(): number {
        const { selectedRuleId } = useRuleListStore();
        return selectedRuleId.value;
      },
      selectedRule() {
        const { selectedRuleId, rules } = useRuleListStore();
        console.log('ref', rules.value, selectedRuleId);
        return rules.value.find(({ id }) => id === selectedRuleId.value);
      },
    },
  }),
);
