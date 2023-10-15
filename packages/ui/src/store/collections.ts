import { trpc } from '@/service';
import { BaseCollection } from '@/types';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';

export const useCollectionsStore = withRefs(
  defineStore('collections', {
    state: () => ({
      fetched: false,
      collections: [] as BaseCollection[],
    }),
    actions: {
      async fetchCollections() {
        try {
          this.collections = await trpc.getAllCollections.query();
          this.fetched = true;
        } catch (error) {
          handleError(error);
        }
      },

      checkIdDuplicated(id: string) {
        return this.collections.some((collection) => collection.id === id);
      },

      async upsertCollection(params: { id: string; name: string }) {
        try {
          await trpc.upsertCollection.mutate(params);
          await this.fetchCollections();
        } catch (error) {
          handleError(error);
        }
      },

      async deleteCollection(id: string) {
        try {
          await trpc.deleteCollection.mutate(id);
          await this.fetchCollections();
        } catch (error) {
          handleError(error);
        }
      },
    },
  }),
);
