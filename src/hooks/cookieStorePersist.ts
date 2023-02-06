import { createEvent, Store } from 'effector';
import Cookies from 'js-cookie';

export const cookieStorePersist = <State>(
  store: Store<State>,
  name?: string,
  expire?: number,
) => {
  const names = store.shortName;
  const persistKey = names;
  const cookie = createEvent('@PERSIST/COOKIE');
  const isExpired = (expires: number) => expires < Date.now();

  if (expire && isExpired(expire)) {
    Cookies.remove(persistKey);
  }

  if (name) {
    const snapshot = Cookies.get(persistKey);

    if (snapshot) {
      store.on(cookie, () => JSON.parse(snapshot));
      cookie();
    }

    store.watch(state => {
      Cookies.set(persistKey, JSON.stringify(state));
    });
  }

  return store;
};
