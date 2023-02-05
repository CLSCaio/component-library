import { ColorsProps, WeightsProps, SizesProps, MediasProps } from '@global';

export interface ConfigProps {
  colors?: ColorsProps;
  fonts?: {
    sizes: SizesProps;
    weights: WeightsProps;
  };
  medias?: MediasProps;
}
