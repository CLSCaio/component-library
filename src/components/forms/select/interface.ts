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
    tooltip?: string;
  };
  options: OptionsProps[];
  id?: string;
  required?: boolean;
  onChange?: (event: any) => void;
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  border?: borders;
  className?: string;
  placeholder?: string;
}

export interface SelectStyle {
  maxW?: maxW;
  transform?: transform;
  disabled?: boolean;
  readOnly?: boolean;
  error?: 'error';
  positionLabel?: 'top' | 'left';
  border?: borders;
}
