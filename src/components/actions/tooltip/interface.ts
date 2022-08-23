type colors =
  | 'others-1'
  | 'others-2'
  | 'others-3'
  | 'others-4'
  | 'others-5'
  | 'transparent'
  | 'black'
  | 'white';
type placement = 'begin' | 'middle' | 'last';

export interface TooltipStyles {
  placement?: placement;
  disabled?: boolean;
  color?: colors;
  sinal?: boolean;
}

export interface TooltipProps {
  description: string;
  placement?: placement;
  disabled?: boolean;
  color?: colors;
  isLoading?: boolean;
}
