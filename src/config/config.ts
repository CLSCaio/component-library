import {
  ColorsProps,
  config_colors,
  config_medias,
  fonts as defaultFonts,
} from '@global';

import { ConfigProps } from './interface';

export const config = ({ colors, medias, fonts }: ConfigProps) => {
  const { config_sizes, config_weights } = defaultFonts;

  config_colors(colors);
  config_medias(medias);
  config_sizes(fonts?.sizes);
  config_weights(fonts?.weights);
};
