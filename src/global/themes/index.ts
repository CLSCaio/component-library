import { sizes, weights, config_sizes } from './fonts';

export * from './colors';
export * from './medias';

export { config_sizes };

export const fonts = {
  sizes,
  weights,
};

export type { MediasProps } from './medias/interface';
export type { ColorsProps } from './colors/interface';
export type { SizesProps } from './fonts/sizes/interface';
export type { WeightsProps } from './fonts/weights/interface';
