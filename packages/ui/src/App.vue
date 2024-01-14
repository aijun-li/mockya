<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import dayjs from 'dayjs';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { SideBar, VersionUpdateModal } from './components';
import { LocalStorageKey } from './const';
import { useVersionStore } from './store';

const isPWA = useMediaQuery('(display-mode: fullscreen), (display-mode: standalone)');

const { checkForUpdates } = useVersionStore();

onMounted(() => {
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
  console.log('123');
  setTimeout(() => {
    checkForUpdates();
  }, 10 * 1000);
});
</script>

<template>
  <div class="h-screen w-screen flex">
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
</template>
