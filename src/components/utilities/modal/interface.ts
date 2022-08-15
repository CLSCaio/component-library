import * as I from './modalConfig/interface';

export interface ModalProps {
  isVisible: boolean;
  withBase?: boolean;
  title: string;
  description?: string;
  size?: I.sizes;
  variant?: I.variants;
  tooltip?: string;
  closeButton?: string;
  button?: {
    isLoading?: boolean;
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
}
