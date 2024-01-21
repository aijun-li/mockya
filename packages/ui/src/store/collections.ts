import { trpc } from '@/service';
import { BaseCollection } from '@/types';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCollectionsStore = withRefs(
  defineStore('collections', () => {
    const fetched = ref(false);
    const collections = ref<BaseCollection[]>([]);

    async function fetchCollections() {
      try {
        collections.value = await trpc.getAllCollections.query();
        fetched.value = true;
      } catch (error) {
        handleError(error);
      }
    }

    function checkIdDuplicated(id: string) {
      return collections.value.some((collection) => collection.id === id);
    }

    async function upsertCollection(params: { id: string; name: string }) {
      try {
        await trpc.upsertCollection.mutate(params);
        await fetchCollections();
      } catch (error) {
        handleError(error);
      }
    }

    async function deleteCollection(id: string) {
      try {
        await trpc.deleteCollection.mutate(id);
        await fetchCollections();
      } catch (error) {
        handleError(error);
      }
    }

    return {
      fetched,
      collections,
      fetchCollections,
      checkIdDuplicated,
      upsertCollection,
      deleteCollection,
    };
  }),
);
