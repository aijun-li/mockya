import { trpc } from '@/service';
import { handleError, withRefs } from '@/utils';
import { useTitle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export const useDetailStore = withRefs(
  defineStore('detail', () => {
    const collectionId = ref('');
    const collectionName = ref('');

    const router = useRouter();
    const title = useTitle();

    watch(collectionId, fetchCollectionInfo);

    watch(collectionName, () => {
      if (collectionName.value) {
        title.value = `MockYa - ${collectionName.value}`;
      } else {
        title.value = 'MockYa';
      }
    });

    async function fetchCollectionInfo() {
      if (!collectionId.value) {
        return;
      }

      try {
        const { name } = await trpc.getCollection.query(collectionId.value);
        collectionName.value = name;
      } catch (error) {
        router.replace({ name: 'home' });
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
