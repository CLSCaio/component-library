import { createEvent, createStore } from 'effector';
import { useStore as useStoreEffector } from 'effector-react';
import { cookieStorePersist } from './cookieStorePersist';

interface IAddStore<Type> {
  data: Type;
  persist?: string;
  expire?: number;
}

export const addStore = <Type>({ data, persist, expire }: IAddStore<Type>) => {
  const configStore = cookieStorePersist(
    createStore<Type>(data, { name: persist }),
    persist,
    expire,
  );

  const saveStore = createEvent<Type>();
  const resetStore = createEvent();

  configStore
    .on(saveStore, (state, payload) => ({ ...state, ...payload }))
    .reset(resetStore);

  const useStore = () => {
    const store = useStoreEffector(configStore);

    return {
      saveStore,
      resetStore,
      store,
    };
  };

  return useStore;
};
