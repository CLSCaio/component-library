import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Group } from '@components';

import { colors } from '@global';
import * as I from './interface';
import * as S from './styles';

export const Pagination = ({
  totalPages,
  setPage,
  isLoading,
  currentPageText,
  firstButton,
  lastButton,
  maxItems = 7,
}: I.PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [last, setLast] = useState<number>(maxItems);

  const MAX_LEFT = (maxItems - 1) / 2;

  const first =
    currentPage >= totalPages - MAX_LEFT && last >= totalPages
      ? totalPages - maxItems + 1
      : Math.max(currentPage - MAX_LEFT, 1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };

  useEffect(() => {
    setLast(Math.min(totalPages, first + maxItems - 1));
  }, [currentPage]);

  return totalPages > 1 ? (
    <S.Container currentPageText={currentPageText}>
      {currentPageText && (
        <S.Text currentPageText={currentPageText}>
          Página {currentPage} de {totalPages}
        </S.Text>
      )}

      <Group align="center" justify="center" gap={[5]} maxW="maxContent">
        {currentPage !== 1 && (
          <Group align="center" justify="center" maxW="maxContent">
            {firstButton && first !== 1 && (
              <S.FirstPageButton
                size={31}
                isLoading={isLoading}
                onClick={() => !isLoading && handleClick(1)}
              />
            )}

            <S.BackButton
              size={24}
              isLoading={isLoading}
              onClick={() => !isLoading && handleClick(currentPage - 1)}
            />
          </Group>
        )}

        <Group align="center" justify="center" gap={[5]} maxW="maxContent">
          {Array.from({ length: maxItems }).map((_, index) => {
            const page = index + first;

            return (
              page <= totalPages && (
                <S.Button
                  type="button"
                  key={page}
                  disabled={!isLoading && page === currentPage}
                  isLoading={isLoading}
                  onClick={() => handleClick(page)}
                >
                  {!isLoading ? (
                    page
                  ) : (
                    <ClipLoader size={18} color={colors.primary} />
                  )}
                </S.Button>
              )
            );
          })}
        </Group>

        {currentPage !== totalPages && (
          <Group align="center" justify="center" maxW="maxContent">
            <S.ForwardButton
              size={24}
              isLoading={isLoading}
              onClick={() => !isLoading && handleClick(currentPage + 1)}
            />
            {lastButton && last < totalPages && (
              <S.LastPageButton
                size={31}
                isLoading={isLoading}
                onClick={() => !isLoading && handleClick(totalPages)}
              />
            )}
          </Group>
        )}
      </Group>
    </S.Container>
  ) : null;
};
