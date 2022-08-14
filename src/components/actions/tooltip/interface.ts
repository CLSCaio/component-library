export interface TooltipStyles {
  placement?: 'downBegin' | 'downMiddle' | 'downLast';
  disabled?: boolean;
  color?: 'others-1' | 'others-2' | 'others-3' | 'others-4' | 'others-5';
  sinal?: boolean;
}

export interface TooltipProps {
  description: string;
  placement?: 'downBegin' | 'downMiddle' | 'downLast';
  disabled?: boolean;
  color?: 'others-1' | 'others-2' | 'others-3' | 'others-4' | 'others-5';
}
