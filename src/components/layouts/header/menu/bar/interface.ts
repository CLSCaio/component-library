export interface BarProps {
  menu: boolean;
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  img?: {
    url: string;
    alt: string;
  };
}
