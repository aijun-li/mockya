<script lang="ts" setup>
import { ContentCard } from '@/components';
import { updateSaveDelay } from '@/const';
import { Input, Toggle } from '@/daisy';
import { useRuleConfigStore, useRuleListStore } from '@/store';
import { useDebounceFn } from '@vueuse/core';

const { rules } = useRuleListStore();
const { selectedRule, updateRuleConfig } = useRuleConfigStore();

async function onEnabledChange(val: boolean) {
  await updateRuleConfig({
    enabled: val,
  });
  rules.value.find((rule) => rule.id === selectedRule.value?.id)!.enabled = val;
}

const onPathInput = useDebounceFn((val: string) => updateRuleConfig({ path: val.trim() }), updateSaveDelay);
</script>

<template>
  <ContentCard>
    <template #header>
      <div class="px-4 py-2">Basic Config</div>
    </template>
    <template #default>
      <div class="h-full w-full p-4">
        <div class="grid grid-cols-[auto,1fr] gap-x-2 gap-y-4">
          <label class="config-label">Enabled</label>
          <Toggle v-model="selectedRule!.enabled" type="success" @change="onEnabledChange" />

          <label class="config-label">URL Path</label>
          <Input v-model="selectedRule!.path" class="max-w-100" size="sm" bordered @input="onPathInput" />
        </div>
      </div>
    </template>
  </ContentCard>
</template>

<style lang="scss" scoped>
.config-label {
  @apply flex-none flex items-center text-sm;
}
</style>
