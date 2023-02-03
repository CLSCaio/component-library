import { createEvent, createStore } from 'effector';
import { useStore as useStoreEffector } from 'effector-react';
import { cookieStorePersist, PersistConfig } from './cookieStorePersist';

interface IAddStore<Type> {
  data: Type;
  name: string;
  config?: PersistConfig;
}

export const addStore = <Type>({ data, name, config }: IAddStore<Type>) => {
  const configStore = cookieStorePersist(createStore<Type>(data, { name }), {
    ...config,
  });

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
