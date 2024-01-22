<script lang="ts" setup>
import { Dot } from '@icon-park/vue-next';
import dayjs from 'dayjs';
import { computed } from 'vue';
import { TrafficItem } from 'whistle.mockya/src/shared/types';
import { Loading } from '@icon-park/vue-next';

interface Props {
  item: TrafficItem;
  selected?: boolean;
}

const props = defineProps<Props>();

const match = computed(() => props.item.match);
</script>

<template>
  <div class="traffic-item" :class="{ selected, match }">
    <div class="flex-1 min-w-0 flex gap-1 items-center justify-start">
      <Loading v-if="!item.complete" class="loading" />
      <Dot v-else class="indicator-dot" :size="12" />
      <span class="url">
        {{ item.url }}
      </span>
    </div>
    <span class="req-time">
      {{ dayjs(item.time).format('HH:mm:ss') }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.traffic-item {
  @apply flex items-center justify-between;
  @apply border rounded px-2 py-2 cursor-pointer transition duration-200;
  @apply hover:shadow-elevate;

  &.selected {
    @apply bg-primary-content/30;
  }

  .loading {
    @apply w-3;
    @apply text-neutral-content;
  }
  .indicator-dot {
    @apply text-neutral-content;
  }
  .url {
    @apply flex-1 text-sm truncate;
    @apply opacity-40;
  }
  .req-time {
    @apply text-xs ml-4;
    @apply opacity-30;
  }

  &.match {
    @apply border-success;

    .indicator-dot,
    .loading,
    .url,
    .req-time {
      @apply text-success opacity-100;
    }
  }
}
</style>
