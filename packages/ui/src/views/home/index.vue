<script lang="ts" setup>
import { Button } from '@/daisy';
import { useRouter } from 'vue-router';
import { ContentCard } from '@/components';

const router = useRouter();

function toCollectionPage() {
  router.push('/collection/123');
}
</script>

<template>
  <div class="h-full w-full">
    <ContentCard class="flex-center">
      <Button @click="toCollectionPage">To Collection</Button>
    </ContentCard>
  </div>
</template>
