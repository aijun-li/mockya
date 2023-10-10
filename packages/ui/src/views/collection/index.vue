<script lang="ts" setup>
import { ContentCard, ResizeLayout } from '@/components';
import { Button } from '@/daisy';
import { LocalStorageKey } from '@/const';
</script>

<template>
  <ResizeLayout
    bar-focused-color="hsl(var(--p))"
    init-start-size="35%"
    :local-key="LocalStorageKey.CollectionResizeLayout"
  >
    <template #start>
      <ContentCard class="flex-center">
        <Button>Left Panel</Button>
      </ContentCard>
    </template>
    <template #end>
      <ContentCard class="flex-center">
        <Button>Right Panel</Button>
      </ContentCard>
    </template>
  </ResizeLayout>
</template>
