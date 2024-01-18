<script lang="ts" setup>
import { ContentCard, IconButton, RuleItem } from '@/components';
import { Loading, Tooltip } from '@/daisy';
import { useRuleListStore } from '@/store';
import { BaseRule } from '@/types';
import { track } from '@/utils/track';
import { FileAddition, HandUp } from '@icon-park/vue-next';
import { nextTick, ref } from 'vue';

const emptyRule = {
  name: 'new rule',
} as BaseRule;

const { rules, createRule, updateRule, deleteRule, selectedRuleId, loading } = useRuleListStore();

const createActive = ref(false);

const createRuleRef = ref<InstanceType<typeof RuleItem> | null>(null);

function onCreateBtnClick() {
  if (!createActive.value) {
    createActive.value = true;
  }

  nextTick(() => {
    createRuleRef.value?.focusEdit();
  });

  track('create_rule_btn_click');
}

async function onCreateRule(name: string, exitEdit: () => void) {
  const newName = name.trim();

  if (newName) {
    const data = await createRule(newName);
    exitEdit();
    if (rules.value.find((rule) => rule.id === data?.id)) {
      selectedRuleId.value = data!.id;
    }
  }

  createActive.value = false;
}

async function onDeleteRule(id: number) {
  await deleteRule(id);
}

async function onUpdateRule(id: number, name: string, exitEdit: () => void) {
  const newName = name.trim();
  const target = rules.value.find((rule) => rule.id === id);

  if (newName && target && newName !== target.name) {
    target.name = newName;

    await updateRule({
      id,
      name: newName,
    });
  }

  exitEdit();
}
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2 pr-3 flex items-center justify-between">
        <span>Rules</span>
        <Tooltip v-show="!loading" class="flex text-xs" content="Add Rule" position="left">
          <IconButton @click="onCreateBtnClick">
            <FileAddition />
          </IconButton>
        </Tooltip>
      </div>
    </template>

    <template #default>
      <div v-if="loading" class="w-full h-full flex-center">
        <Loading shape="dots" size="lg" />
      </div>

      <div v-else-if="!rules.length && !createActive" class="w-full h-full p-2 flex-center flex-col text-lg relative">
        <HandUp class="mb-4" :size="36" />
        Create One Rule
      </div>

      <div v-else class="w-full h-full p-2 flex flex-col overflow-auto">
        <div v-for="rule in rules" :key="rule.name" class="rule-item">
          <RuleItem
            class="rule-item"
            :rule="rule"
            :selected="selectedRuleId === rule.id"
            @delete="onDeleteRule(rule.id)"
            @edit-confirm="(name, exitEdit) => onUpdateRule(rule.id, name, exitEdit)"
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
