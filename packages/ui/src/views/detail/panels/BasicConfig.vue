<script lang="ts" setup>
import { ContentCard, IconButton } from '@/components';
import { updateSaveDelay } from '@/const';
import { Button, Input, Toggle } from '@/daisy';
import { useRuleConfigStore, useRuleListStore } from '@/store';
import { UpdateConditionParams } from '@/types';
import { Plus, ReduceOne } from '@icon-park/vue-next';
import { useDebounceFn } from '@vueuse/core';

const { rules } = useRuleListStore();
const { selectedRule, updateRuleConfig, createRuleCondition, updateRuleCondition, deleteRuleCondition } =
  useRuleConfigStore();

async function onEnabledChange(val: boolean) {
  await updateRuleConfig({
    enabled: val,
  });
  rules.value.find((rule) => rule.id === selectedRule.value!.id)!.enabled = val;
}

const onPathInput = useDebounceFn((val: string) => updateRuleConfig({ path: val.trim() }), updateSaveDelay);

const onConditionCreate = () => {
  createRuleCondition(selectedRule.value!.id);
};

const onConditionFieldInput = useDebounceFn((params: UpdateConditionParams) => {
  updateRuleCondition(params);
}, updateSaveDelay);

const onConditionDelete = (id: number) => {
  deleteRuleCondition(id);
};
</script>

<template>
  <ContentCard class="max-h-[35%]">
    <template #header>
      <div class="px-4 py-2">Basic Config</div>
    </template>
    <template #default>
      <div class="h-full w-full p-4 overflow-auto">
        <div class="grid grid-cols-[auto,1fr] gap-x-2 gap-y-4">
          <label class="config-label">Enabled</label>
          <Toggle v-model="selectedRule!.enabled" type="success" @change="onEnabledChange" />

          <label class="config-label">URL Path</label>
          <div class="flex-1 flex-center">
            <Input v-model="selectedRule!.path" class="mr-2" size="sm" bordered @input="onPathInput" />
            <div class="empty-placeholder" />
          </div>

          <label class="config-label h-8">Conditions</label>
          <div>
            <div class="grid grid-cols-[1fr,auto,1fr,auto] gap-y-2">
              <template v-for="condition in selectedRule!.conditions" :key="condition.id">
                <Input
                  v-model="condition.key"
                  bordered
                  size="sm"
                  @input="onConditionFieldInput({ id: condition.id, key: $event.trim() })"
                />
                <span class="leading-8 mx-2">=</span>
                <Input
                  v-model="condition.value"
                  bordered
                  size="sm"
                  @input="onConditionFieldInput({ id: condition.id, value: $event.trim() })"
                />
                <div class="ml-2 h-full flex-center">
                  <IconButton transparent @click="onConditionDelete(condition.id)">
                    <ReduceOne />
                  </IconButton>
                  <!-- <div v-else class="empty-placeholder" /> -->
                </div>
              </template>
            </div>
            <div class="flex items-center w-full">
              <Button
                class="flex-1 mr-2 normal-case text-xs"
                :class="{
                  'mt-2': selectedRule!.conditions.length,
                }"
                size="sm"
                @click="onConditionCreate"
              >
                <Plus :stroke-width="5" :size="14" />
                <span>New Condition</span>
              </Button>
              <div class="empty-placeholder" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </ContentCard>
</template>

<style lang="scss" scoped>
.config-label {
  @apply flex-none flex items-center text-sm;
}

.empty-placeholder {
  @apply w-6 flex-none;
}
</style>
