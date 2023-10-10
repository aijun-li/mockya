<script lang="ts" setup>
import { Search, Home, Setting, Analysis, MonitorOne } from '@icon-park/vue-next';
import { Button, Tooltip, toast } from '@/daisy';
import { useRouter } from 'vue-router';

const router = useRouter();

const topConfigs = [
  {
    icon: Home,
    tip: 'Home',
    handler: () => {
      goRoute('/');
    },
  },
  {
    icon: Search,
    tip: 'Search',
    handler: () => {
      toast.warning('Not Implemented 嘿嘿');
    },
  },
];

const bottomConfigs = [
  {
    icon: MonitorOne,
    tip: 'Traffic',
    handler: () => {
      goRoute('/traffic');
    },
  },
  {
    icon: Analysis,
    tip: 'Statistics',
    handler: () => {
      goRoute('/statistics');
    },
  },
  {
    icon: Setting,
    tip: 'Settings',
    handler: () => {
      goRoute('/settings');
    },
  },
];

const configGroups = [topConfigs, bottomConfigs];

function goRoute(path: string) {
  router.push(path);
}
</script>

<template>
  <div class="py-2 h-screen w-12 bg-base-200 flex flex-col items-center justify-between">
    <div v-for="(group, index) in configGroups" :key="index" class="flex flex-col items-center gap-2">
      <Tooltip v-for="config in group" :key="config.tip" :content="config.tip" position="right">
        <Button class="w-10 h-10 hover:shadow" shape="square" @click="config.handler">
          <component :is="config.icon" :size="22" />
        </Button>
      </Tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-item {
  @apply w-8 h-8 flex items-center justify-center my-2;
}
</style>
