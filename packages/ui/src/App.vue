<script setup lang="ts">
import { DizzyFace } from '@icon-park/vue-next';
import { useMediaQuery, whenever } from '@vueuse/core';
import dayjs from 'dayjs';
import { RouterView } from 'vue-router';
import { SideBar, VersionUpdateModal } from './components';
import { LocalStorageKey } from './const';
import { Button, Loading } from './daisy';
import { useHealthCheck } from './hooks';
import { useStatsStore, useTrafficStore, useVersionStore } from './store';

const isPWA = useMediaQuery('(display-mode: fullscreen), (display-mode: standalone)');

const { checkForUpdates } = useVersionStore();
const { fetchStats } = useStatsStore();
const { healthy, healthChecked, healthCheckLoading, checkHealth } = useHealthCheck();

checkHealth();

whenever(healthy, () => {
  fetchStats();
});

whenever(healthy, () => {
  const storedTime = localStorage.getItem(LocalStorageKey.VersionUpdateShowTime);
  if (!storedTime) {
    setTimeout(() => {
      checkForUpdates();
    }, 10 * 1000);
    return;
  }

  const lastShowTime = dayjs(storedTime).startOf('day').toISOString();
  const currentTime = dayjs().startOf('day').toISOString();
  if (currentTime == lastShowTime) {
    return;
  }

  setTimeout(() => {
    checkForUpdates();
  }, 10 * 1000);
});

const { start } = useTrafficStore();
start();
</script>

<template>
  <div v-if="healthy" class="h-screen w-screen flex">
    <SideBar class="flex-none" />
    <div
      class="h-screen flex-1 relative min-w-0 py-2 pr-2 bg-base-200"
      :class="{
        'pt-0': isPWA,
      }"
    >
      <RouterView />
    </div>

    <VersionUpdateModal />
  </div>

  <div v-else-if="healthChecked" class="h-screen w-screen flex flex-col items-center text-center">
    <div class="grow-[4] flex-center flex-col max-w-lg">
      <DizzyFace :size="100" :stroke-width="2" />
      <h1 class="text-4xl font-bold mt-6">Oops! Whistle Not Running</h1>
      <p class="py-6 text-lg">Please start Whistle and try again.</p>
      <Button type="primary" :disabled="healthCheckLoading" @click="checkHealth">
        <Loading v-if="healthCheckLoading" size="xs" />
        Retry
      </Button>
    </div>
    <div class="grow"></div>
  </div>
</template>
