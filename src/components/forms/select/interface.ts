export const widths = {
  block: '100%',
  maxContent: 'max-content',
};

export type OptionsProps = {
  label: string;
  value: string | number;
};

type maxW = 'block' | number | 'max-content';
type transform = 'capitalize' | 'lowercase' | 'uppercase';
type borders = 'outline' | 'inline';

export interface SelectProps {
  name: string;
  label?: {
    name: string;
    position?: 'top' | 'left';
  };
  options: OptionsProps[];
  id?: string;
  required?: boolean;
  tooltip?: string;
  onChange?: (event: any) => void;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  positionLabel?: 'top' | 'left';
  border?: borders;
  className?: string;
  placeholder?: string;
}

export interface SelectStyle {
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  positionLabel?: 'top' | 'left';
  border?: borders;
}
