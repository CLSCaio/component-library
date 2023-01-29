import { css } from 'styled-components';

import * as I from './interface';

const calcHeaderHeight = ({ menu, routes }: I.HeaderStyles) => {
  const lenght = routes?.length;
  const calc = lenght && (lenght + 1) * 60;
  const px = `${calc}px`;

  if (menu) {
    return css`
      height: ${px};
    `;
  }
  return css`
    height: 70px;
  `;
};

export default calcHeaderHeight;
