<script lang="ts" setup>
import { ContentCard } from '@/components';
import { Hero } from '@/daisy';
import { useRuleConfigStore } from '@/store/rule-config';
import { HandLeft } from '@icon-park/vue-next';
import { TabPane, Tabs } from 'ant-design-vue';

const { selectedRule } = useRuleConfigStore();
</script>

<template>
  <ContentCard v-if="!selectedRule">
    <Hero>
      <div class="flex-center text-xl">
        <HandLeft class="mr-4" />
        Select One Rule First
      </div>
    </Hero>
  </ContentCard>

  <ContentCard v-else class="config-content overflow-hidden">
    <Tabs class="h-full" animated>
      <TabPane key="basic-config" tab="Basic Config">
        <div class="font-semibold text-lg">{{ selectedRule.name }}</div>
      </TabPane>
      <TabPane key="pattern-matcher" tab="Pattern Matcher"> Pattern Matcher </TabPane>
      <TabPane key="mock-data" tab="Mock Data"> Mock Data </TabPane>
    </Tabs>
  </ContentCard>
</template>
