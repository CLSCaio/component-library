import { Tsize } from '@types';

export const convertSize = (defaultSize?: string, size?: Tsize) => {
  if (typeof size === 'number') return `${size}px`;
  if (!size) return defaultSize;

  const validSize = {
    block: '100%',
    maxContent: 'max-content',
    default: defaultSize,
  };

  return validSize[size];
};
