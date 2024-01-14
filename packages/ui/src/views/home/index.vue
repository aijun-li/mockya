<script lang="ts" setup>
import { CollectionCard, ContentCard, CreateCollectionCard, CreateCollectionModal } from '@/components';
import { Loading } from '@/daisy';
import { useCollectionsStore } from '@/store';
import { track } from '@/utils/track';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function toCollectionPage(id: string) {
  router.push({ name: 'detail', params: { id } });
}

const { fetched, collections, fetchCollections } = useCollectionsStore();

const loading = ref(!fetched.value);

fetchCollections().then(() => {
  loading.value = false;
});

const createVisible = ref(false);

function onCreateClick() {
  createVisible.value = true;
  track('create_collection_btn_click');
}
</script>

<template>
  <div class="h-full w-full">
    <ContentCard class="flex-center p-6">
      <Loading v-if="loading" shape="dots" size="lg" />

      <div v-else class="w-full h-full">
        <div class="responsive-grid">
          <CreateCollectionCard @click="onCreateClick" />
        </div>
        <div class="font-bold text-xl mt-8 mb-5">All Collections</div>
        <div class="responsive-grid">
          <CollectionCard
            v-for="collection in collections"
            :key="collection.id"
            :collection="collection"
            @click="toCollectionPage(collection.id)"
          >
            {{ collections[0]?.name }}
          </CollectionCard>
        </div>
      </div>
    </ContentCard>
    <CreateCollectionModal v-model="createVisible" />
  </div>
</template>

<style lang="scss" scoped>
.responsive-grid {
  @apply grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5;
}
</style>
