import { config_colors, config_sizes, config_medias } from '@global';

import { ConfigProps } from './interface';

export const config = ({ colors, medias, sizes }: ConfigProps) => {
  config_colors(colors);
  config_medias(medias);
  config_sizes(sizes);
};
