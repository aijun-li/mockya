<script lang="tsx" setup>
import { Plus } from '@icon-park/vue-next';
</script>

<template>
  <div class="add-collection-card">
    <Plus class="mr-2" :size="20" />
    New Collection
  </div>
</template>

<style lang="scss" scoped>
.add-collection-card {
  @apply border rounded p-4 flex-center h-20;
  @apply transition duration-500;
  @apply hover:shadow-elevate hover:cursor-pointer;
}
</style>
