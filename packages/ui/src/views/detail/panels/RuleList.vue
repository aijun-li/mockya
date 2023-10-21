<script lang="ts" setup>
import { ContentCard, IconButton, RuleItem } from '@/components';
import { Tooltip } from '@/daisy';
import { useRuleListStore } from '@/store';
import { BaseRule } from '@/types';
import { FileAddition } from '@icon-park/vue-next';

import { nextTick, ref } from 'vue';

const emptyRule = {
  name: 'new rule',
} as BaseRule;

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
    const data = await createRule(newName);
    if (rules.value.find((rule) => rule.id === data?.id)) {
      selectedRuleId.value = data!.id;
    }
  }

  createActive.value = false;
}

async function onDeleteRule(id: number) {
  await deleteRule(id);
}

async function onUpdateRule(id: number, name: string) {
  const newName = name.trim();
  const target = rules.value.find((rule) => rule.id === id);

  if (newName && target && newName !== target.name) {
    target.name = newName;

    await updateRule({
      id,
      name: newName,
    });
  }
}
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 pr-3 flex items-center justify-between">
        <span>Rules</span>
        <Tooltip class="flex text-xs" content="Add Rule" position="left">
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
            @edit-confirm="onUpdateRule(rule.id, $event)"
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
