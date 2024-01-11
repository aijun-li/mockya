<script lang="ts" setup>
import { Button, Tooltip, toast } from '@/daisy';
import { Analysis, Home, MonitorOne, Search, Setting } from '@icon-park/vue-next';
import { useMediaQuery } from '@vueuse/core';
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

const isPWA = useMediaQuery('(display-mode: fullscreen), (display-mode: standalone)');

function goRoute(path: string) {
  router.push(path);
}
</script>

<template>
  <div
    class="py-2 h-screen w-10 bg-base-200 flex flex-col items-center justify-between"
    :class="{
      'pt-0': isPWA,
    }"
  >
    <div v-for="(group, index) in configGroups" :key="index" class="flex flex-col items-center gap-2">
      <Tooltip
        v-for="config in group"
        :key="config.tip"
        class="sidebar-btn-wrapper"
        :content="config.tip"
        position="right"
      >
        <Button class="sidebar-btn rounded w-8 h-8 shadow-none hover:shadow" shape="square" @click="config.handler">
          <component :is="config.icon" :size="20" />
        </Button>
      </Tooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-btn-wrapper + .sidebar-btn-wrapper {
  @apply mt-1;
}
</style>
