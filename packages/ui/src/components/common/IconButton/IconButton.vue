<script lang="ts" setup>
import { Button } from '@/daisy';
import { computed } from 'vue';

interface Props {
  size?: number;
  transparent?: boolean;
  danger?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  transparent: false,
});

const styles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
}));
</script>

<template>
  <Button
    class="min-h-0 rounded"
    :class="{
      'hover:!bg-transparent': transparent && !danger,
      'text-base-100': danger,
    }"
    :style="styles"
    shape="square"
    :type="danger ? 'error' : 'ghost'"
  >
    <slot />
  </Button>
</template>
