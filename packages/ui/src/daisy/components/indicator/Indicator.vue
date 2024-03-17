<script lang="ts" setup>
import { IColorType, ISize } from '@/daisy/types';
import { computed } from 'vue';
import { Badge } from '../badge';

interface Props {
  visible?: boolean;
  content?: string;
  type?: IColorType | 'ghost';
  outline?: boolean;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  size?: ISize | 'xxs';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'xxs',
});

const classNames = computed(() => ({
  'indicator-item': true,
  'indicator-start': props.start,
  'indicator-center': props.center,
  'indicator-end': props.end,
  'indicator-top': props.top,
  'indicator-middle': props.middle,
  'indicator-bottom': props.bottom,
}));
</script>

<template>
  <div class="indicator">
    <Badge v-if="visible" :class="classNames" :type="type" :size="size" :outline="outline">{{ content }}</Badge>
    <slot />
  </div>
</template>
