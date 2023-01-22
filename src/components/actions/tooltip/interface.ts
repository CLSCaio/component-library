import { TplacementTooltip } from 'src/types';

type colors =
  | 'others-1'
  | 'others-2'
  | 'others-3'
  | 'others-4'
  | 'others-5'
  | 'transparent'
  | 'black'
  | 'white';

export interface TooltipStyles {
  placement?: TplacementTooltip;
  disabled?: boolean;
  color?: colors;
  sinal?: boolean;
}

export interface TooltipProps {
  description: string;
  placement?: TplacementTooltip;
  disabled?: boolean;
  color?: colors;
  isLoading?: boolean;
}
