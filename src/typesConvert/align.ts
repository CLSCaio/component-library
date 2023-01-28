import { TTextAlign } from 'src/types/align';
import { css } from 'styled-components';

export const convertTextAlign = (align?: TTextAlign) => {
  const defaultCss = css`
    justify-content: center;
    text-align: center;
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
    center: defaultCss,
  };

  return validAlign[align];
};
