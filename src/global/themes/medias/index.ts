import { MediasProps } from './interface';

export let medias: MediasProps = {
  xSmall: 500,
  small: 850,
  medium: 1080,
  default: 1280,
  large: 1920,
  xLarge: 2560,
  huge: 3840,
};

export const config_medias = (state?: MediasProps) => {
  medias = {
    xSmall: state?.xSmall || medias.xSmall,
    small: state?.small || medias.small,
    default: state?.default || medias.default,
    medium: state?.medium || medias.medium,
    large: state?.large || medias.large,
    xLarge: state?.xLarge || medias.xLarge,
    huge: state?.huge || medias.huge,
  };
  return medias;
};
