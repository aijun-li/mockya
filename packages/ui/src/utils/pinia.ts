import { StoreGeneric, storeToRefs } from 'pinia';

export function withRefs<SS extends StoreGeneric>(useStore: () => SS) {
  return () => {
    const store = useStore();
    const storeRefs = storeToRefs(store);

    type RawStore = typeof store;
    type RefStore = typeof storeRefs;
    type Store = Omit<RawStore, keyof RefStore> & RefStore;

    return {
      ...store,
      ...storeRefs,
    } as Store;
  };
}
