export interface PaginationProps extends PaginationStyles {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxItems?: 3 | 5 | 7 | 9 | 11 | 13 | 15 | 18 | 21;
  firstButton?: boolean;
  lastButton?: boolean;
}

export interface PaginationStyles {
  isLoading?: boolean;
  currentPageText?: 'top' | 'left' | 'bottom';
}
