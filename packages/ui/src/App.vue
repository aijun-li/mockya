<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { RouterView } from 'vue-router';
import { SideBar } from './components';

const isPWA = useMediaQuery('(display-mode: fullscreen), (display-mode: standalone)');
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
  </div>
</template>
