import { useState, useCallback, useEffect } from 'react';

import { ColorsProps } from '@global';

import { addStore } from '@hooks';

const name = window && window.location.host.replace(/[:/?]/g, '-');

export const colors_config = addStore<ColorsProps | null>({
  data: null,
  name: `${name}-user-colors`,
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
