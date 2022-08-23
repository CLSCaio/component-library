import * as I from './modalConfig/interface';

export interface ModalProps {
  isVisible: boolean;
  withoutBase?: boolean;
  title: string;
  description?: string;
  size?: I.sizes;
  variant?: I.variants;
  tooltip?: string;
  isLoading?: boolean;
  closeButton?: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };
}
