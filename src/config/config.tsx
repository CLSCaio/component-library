import { useState, useCallback, useEffect } from 'react';

import { ColorsProps } from '@global';

import { addStore } from '@hooks';

const hostname =
  typeof window !== 'undefined' && window.location.host.replace(/[:/?]/g, '-');

const config_name =
  typeof window !== 'undefined' ? `${hostname}-user-colors` : 'user-colors';

export const colors_config = addStore<ColorsProps | null>({
  data: null,
  persist: config_name,
});

export const useConfig = (colors: ColorsProps) => {
  const { saveStore, store } = colors_config();
  const [state, setState] = useState(false);

  const saveColors = useCallback(() => saveStore(colors), [colors]);

  useEffect(() => {
    if (!state) {
      saveColors();
      setState(true);
    }
  }, [state]);

  return store;
};
