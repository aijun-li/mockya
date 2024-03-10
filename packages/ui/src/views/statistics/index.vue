<script lang="ts" setup>
import { ContentCard } from '@/components';
import { useStatsStore } from '@/store';
import { IntStatKey } from '@shared/types';
import numeral from 'numeral';
import { computed } from 'vue';

const { stats } = useStatsStore();

const statsLists = computed(() =>
  [
    [
      {
        title: 'Total Mock Times',
        key: IntStatKey.MockTimes,
        format: '0,0',
      },
      {
        title: 'Total Mock Data Size',
        key: IntStatKey.MockDataSize,
        format: '0.0b',
      },
    ],
    [
      {
        title: 'Created Collections',
        key: IntStatKey.CreatedCollections,
        format: '0,0',
      },
      {
        title: 'Created Rules',
        key: IntStatKey.CreatedRules,
        format: '0,0',
      },
      {
        title: 'Created Matchers',
        key: IntStatKey.CreatedMatchers,
        format: '0,0',
      },
      {
        title: 'Created Mock Data',
        key: IntStatKey.CreatedMockData,
        format: '0,0',
      },
    ],
  ].map((configs) =>
    configs.map((config) => ({
      key: config.key,
      title: config.title,
      content: numeral(stats.value[config.key] ?? 0).format(config.format),
    })),
  ),
);
</script>

<template>
  <div class="h-full w-full">
    <ContentCard class="p-6 flex items-start flex-col gap-6">
      <div v-for="(list, index) in statsLists" :key="index" class="stats shadow">
        <div v-for="stat in list" :key="stat.key" class="stat">
          <div class="stat-title">{{ stat.title }}</div>
          <div class="stat-value">{{ stat.content }}</div>
        </div>
      </div>
    </ContentCard>
  </div>
</template>
