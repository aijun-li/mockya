<script lang="ts" setup>
import { Button } from '@/daisy';
import { computed } from 'vue';

interface Props {
  size?: number;
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
  <Button class="min-h-0 rounded" :style="styles" shape="square" type="ghost">
    <slot />
  </Button>
</template>
