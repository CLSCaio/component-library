import { css } from 'styled-components';

import { TAlignOrJustify, TJustify, TTextAlign } from 'src/types/align';

export const convertTextAlign = (align?: TTextAlign) => {
  const defaultCss = css`
    justify-content: flex-start;
    text-align: start;
  `;

  if (!align) return defaultCss;

  const validAlign = {
    start: css`
      justify-content: flex-start;
      text-align: start;
    `,
    end: css`
      justify-content: flex-end;
      text-align: end;
    `,
    center: css`
      justify-content: center;
      text-align: center;
    `,
  };

  return validAlign[align];
};

export const convertAlign = (align?: TAlignOrJustify) => {
  if (!align) return 'flex-start';

  const validAlign = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
  };

  return validAlign[align];
};

export const convertJustify = (justify?: TJustify) => {
  if (!justify) return 'flex-start';

  const validJustify = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  };

  return validJustify[justify];
};
