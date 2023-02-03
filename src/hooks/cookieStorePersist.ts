import { createEvent, Store } from 'effector';
import Cookies from 'js-cookie';

export type PersistConfig = {
  expire?: number;
};

export const cookieStorePersist = <State>(
  store: Store<State>,
  config: PersistConfig,
) => {
  const name = store.shortName;
  const { expire } = config;
  const persistKey = name;
  const cookie = createEvent('@PERSIST/COOKIE');
  const isExpired = (expires: number) => expires < Date.now();

  if (expire && isExpired(expire)) {
    Cookies.remove(persistKey);
  }

  const snapshot = Cookies.get(persistKey);

  if (snapshot) {
    store.on(cookie, () => JSON.parse(snapshot));
    cookie();
  }

  store.watch(state => {
    Cookies.set(persistKey, JSON.stringify(state));
  });

  return store;
};
