import { SizesProps } from './interface';

export let sizes: SizesProps = {
  xSmall: '0.7rem',
  small: '0.85rem',
  default: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
  xLarge: '1.7rem',
  huge: '1.85rem',
};

export const config_sizes = (state?: SizesProps) => {
  sizes = {
    xSmall: state?.xSmall || sizes.xSmall,
    small: state?.small || sizes.small,
    default: state?.default || sizes.default,
    medium: state?.medium || sizes.medium,
    large: state?.large || sizes.large,
    xLarge: state?.xLarge || sizes.xLarge,
    huge: state?.huge || sizes.huge,
  };
  return sizes;
};
