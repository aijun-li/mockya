<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { SideBar, VersionUpdateModal } from './components';
import { useVersionStore } from './store';

const isPWA = useMediaQuery('(display-mode: fullscreen), (display-mode: standalone)');

const { checkForUpdates } = useVersionStore();

onMounted(() => {
  setTimeout(() => {
    checkForUpdates();
  }, 2000);
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
