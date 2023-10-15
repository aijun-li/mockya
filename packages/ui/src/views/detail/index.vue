<script lang="ts" setup>
import { ResizeLayout } from '@/components';
import { LocalStorageKey } from '@/const';
import { useDetailStore } from '@/store';
import RuleConfigPanel from './panels/RuleConfig.vue';
import RuleListPanel from './panels/RuleList.vue';

interface Props {
  id: string;
}

const props = defineProps<Props>();

const { collectionId, fetchDetail } = useDetailStore();

collectionId.value = props.id;
fetchDetail();
</script>

<template>
  <ResizeLayout
    class="detail-layout"
    bar-focused-color="hsl(var(--p))"
    init-start-size="35%"
    :local-key="LocalStorageKey.DetailResizeLayout"
    :start-min-size="200"
    :start-max-size="400"
  >
    <template #start>
      <RuleListPanel />
    </template>
    <template #end> <RuleConfigPanel /> </template>
  </ResizeLayout>
</template>

<style lang="scss" scoped></style>
