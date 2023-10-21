<script lang="ts" setup>
interface Slots {
  default: () => void;
  header?: () => void;
}

const slots = defineSlots<Slots>();
</script>

<template>
  <div v-if="!slots.header" class="h-full w-full bg-base-100 shadow-md rounded">
    <slot />
  </div>
  <div v-else class="h-full w-full bg-base-100 shadow-md rounded flex flex-col">
    <div class="border-b border-base-300 text-xs font-semibold leading-6">
      <slot name="header" />
    </div>
    <div class="flex-1 min-h-0">
      <slot />
    </div>
  </div>
</template>
