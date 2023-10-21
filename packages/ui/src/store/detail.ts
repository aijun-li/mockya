import { trpc } from '@/service';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useDetailStore = withRefs(
  defineStore('detail', () => {
    const collectionId = ref('');
    const collectionName = ref('');

    watch(collectionId, fetchCollectionInfo);

    async function fetchCollectionInfo() {
      if (!collectionId.value) {
        return;
      }

      try {
        const { name } = await trpc.getCollection.query(collectionId.value);
        collectionName.value = name;
      } catch (error) {
        handleError(error);
      }
    }

    function setDetailCollectionId(id: string) {
      collectionId.value = id;
    }

    return {
      collectionId,
      collectionName,
      setDetailCollectionId,
      fetchCollectionInfo,
    };
  }),
);
