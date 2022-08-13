export interface BarProps {
  menu: boolean;
  openMenu: React.Dispatch<React.SetStateAction<boolean>>;
  img?: {
    url: string;
    alt: string;
  };
}
