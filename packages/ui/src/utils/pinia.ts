import { StoreGeneric, storeToRefs } from 'pinia';

export function withRefs<SS extends StoreGeneric>(useStore: () => SS) {
  return () => {
    const store = useStore();
    const storeRefs = storeToRefs(store);
    return {
      ...store,
      ...storeRefs,
    };
  };
}
