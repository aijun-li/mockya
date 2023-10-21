<script setup lang="ts">
import { RouterView } from 'vue-router';
import { SideBar } from './components';
</script>

<template>
  <div class="h-screen w-screen flex">
    <SideBar class="flex-none" />
    <div class="h-screen flex-1 relative min-w-0 py-2 pr-2 bg-base-200">
      <RouterView />
    </div>
  </div>
</template>
