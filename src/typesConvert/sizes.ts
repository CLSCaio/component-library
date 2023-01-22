import { Tsize } from 'src/types';

export const sizesConvert = (size: Tsize) => {
  if (typeof size === 'number') return `${size}px`;

  const validSize = {
    block: '100%',
    maxContent: 'max-content',
  };

  return validSize[size];
};
