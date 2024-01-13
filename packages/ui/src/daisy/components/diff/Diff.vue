<script lang="ts" setup>
interface Props {
  defaultPosition?: string;
}

defineProps<Props>();
</script>

<template>
  <div class="diff">
    <div class="diff-item-1">
      <slot name="item-one" />
    </div>
    <div class="diff-item-2">
      <slot name="item-two" />
    </div>
    <div class="diff-resizer" :style="{ width: defaultPosition }" />
  </div>
</template>
