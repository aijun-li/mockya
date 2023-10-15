import { trpc } from '@/service';
import { Rule } from '@/types';
import { handleError, withRefs } from '@/utils';
import { defineStore } from 'pinia';

export const useDetailStore = withRefs(
  defineStore('detail', {
    state: () => ({
      collectionId: '',
      collectionName: '',
      rules: [] as Rule[],
    }),
    actions: {
      async fetchDetail() {
        try {
          const { name, rules } = await trpc.getCollection.query(this.collectionId);
          this.collectionName = name;
          this.rules = rules;
        } catch (error) {
          handleError(error);
        }
      },
    },
  }),
);
