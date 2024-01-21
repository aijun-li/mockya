<script lang="ts" setup>
import { ContentCard, ResizeLayout } from '@/components';
import { LocalStorageKey } from '@/const';
import { Hero } from '@/daisy';
import { useDetailStore, useRuleConfigStore, useRuleListStore } from '@/store';
import { HandLeft } from '@icon-park/vue-next';
import { onUnmounted, watchEffect } from 'vue';
import BasicConfigPanel from './panels/BasicConfig.vue';
import MatcherConfigPanel from './panels/MatcherConfig.vue';
import MockConfigPanel from './panels/MockConfig.vue';
import RuleListPanel from './panels/RuleList.vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const { setDetailCollectionId, collectionId, collectionName } = useDetailStore();
const { selectedRule } = useRuleConfigStore();
const { selectedRuleId, rules } = useRuleListStore();

onUnmounted(() => {
  collectionId.value = '';
  collectionName.value = '';
  selectedRuleId.value = 0;
  selectedRule.value = undefined;
  rules.value = [];
});

watchEffect(() => {
  setDetailCollectionId(props.id);
});
</script>

<template>
  <ResizeLayout
    class="detail-layout"
    init-start-size="35%"
    :local-key="LocalStorageKey.DetailResizeLayout"
    :start-min-size="200"
    :start-max-size="300"
  >
    <template #start>
      <RuleListPanel />
    </template>
    <template #end>
      <ResizeLayout
        v-if="selectedRule"
        class="flex-1 min-h-0"
        init-start-size="40%"
        :start-min-size="300"
        :start-max-size="600"
        :local-key="LocalStorageKey.ConfigResizeLayout"
      >
        <template #start>
          <div class="flex flex-col h-full gap-2">
            <BasicConfigPanel class="!h-fit" />
            <MatcherConfigPanel class="flex-1 min-h-0" />
          </div>
        </template>
        <template #end>
          <MockConfigPanel />
        </template>
      </ResizeLayout>

      <ContentCard v-else>
        <Hero>
          <div class="flex-center flex-col text-xl">
            <HandLeft class="mb-4" :size="48" />
            Select One Rule First
          </div>
        </Hero>
      </ContentCard>
    </template>
  </ResizeLayout>
</template>

<style lang="scss" scoped></style>
