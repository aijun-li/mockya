<script lang="ts" setup>
import { ContentCard, IconButton, RuleItem } from '@/components';
import { Tooltip } from '@/daisy';
import { useRuleListStore } from '@/store';
import { Rule } from '@/types';
import { FileAddition } from '@icon-park/vue-next';

import { nextTick, ref } from 'vue';

const emptyRule = {
  name: 'new rule',
} as Rule;

const { rules, createRule, updateRule, deleteRule, selectedRuleId } = useRuleListStore();

const createActive = ref(false);

const createRuleRef = ref<InstanceType<typeof RuleItem> | null>(null);

function onCreateBtnClick() {
  if (!createActive.value) {
    createActive.value = true;
  }

  nextTick(() => {
    createRuleRef.value?.focusEdit();
  });
}

async function onCreateRule(name: string) {
  const newName = name.trim();

  if (newName) {
    await createRule(newName);
  }

  createActive.value = false;
}

async function onDeleteRule(id: number) {
  await deleteRule(id);
}

async function onUpdateRule(rule: Rule, name: string, exitActive: () => void) {
  const newName = name.trim();

  if (newName && newName !== rule.name) {
    await updateRule({
      id: rule.id,
      name: newName,
    });
  }

  exitActive();
}
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 flex items-center justify-between">
        <span class="text-xs font-semibold">Rules</span>
        <Tooltip class="flex text-xs" content="Add Rule" position="bottom">
          <IconButton @click="onCreateBtnClick">
            <FileAddition />
          </IconButton>
        </Tooltip>
      </div>
    </template>

    <template #default>
      <div class="w-full h-full p-2 flex flex-col overflow-auto">
        <div v-for="rule in rules" :key="rule.name" class="rule-item">
          <RuleItem
            class="rule-item"
            :rule="rule"
            :selected="selectedRuleId === rule.id"
            @delete="onDeleteRule(rule.id)"
            @edit-confirm="(name, exitActive) => onUpdateRule(rule, name, exitActive)"
            @click="selectedRuleId = rule.id"
          />
        </div>

        <div v-if="createActive" class="rule-item create">
          <RuleItem
            ref="createRuleRef"
            class="rule-item"
            :rule="emptyRule"
            init-edit
            @edit-confirm="onCreateRule"
            @edit-cancel="createActive = false"
          />
        </div>
      </div>
    </template>
  </ContentCard>
</template>

<style lang="scss" scoped>
.rule-item + .rule-item {
  @apply mt-1;
}
</style>
