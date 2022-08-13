export interface TooltipStyles {
  placement?: 'downBegin' | 'downMiddle' | 'downLast';
  disabled?: boolean;
  color?:
    | 'black'
    | 'darkRed'
    | 'indigo'
    | 'steelGray'
    | 'steelBlue'
    | 'lightGreen';
}

export interface TooltipProps extends TooltipStyles {
  description: string;
}
