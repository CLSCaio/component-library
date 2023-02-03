import { TplacementTooltip } from 'src/types';

type colors = 'transparent' | 'black' | 'white';

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
