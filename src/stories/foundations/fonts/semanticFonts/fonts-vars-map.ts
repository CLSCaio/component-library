import { sizes, weights } from '../../../../index';

const font = 'Font-size';
const weight = 'Font-weight';

export const fontsMap = [
  // font-size
  {
    name: `${font} xXsmall`,
    description:
      'Font usada para textos muito pequenos, com pouco destaque no site',
    font: {
      size: sizes.xXsmall,
    },
  },
  {
    name: `${font} Small`,
    description: 'Font usada para textos pequenos',
    font: {
      size: sizes.small,
    },
  },
  {
    name: `${font} Default`,
    description: 'Font padrão usado em quase todos o site',
    font: {
      size: sizes.default,
    },
  },
  {
    name: `${font} Large`,
    description:
      'Font usada para dar destaque a algo, como por exemplo em subTitulos',
    font: {
      size: sizes.large,
    },
  },
  {
    name: `${font} xXlarge`,
    description:
      'Font usada para dar destaque a algo, como por exemplo em titulos',
    font: {
      size: sizes.xXlarge,
    },
  },

  // font weight
  {
    name: `${weight} Light`,
    description: 'Weight usada a algo com pouco destaque',
    font: {
      weight: weights.light,
    },
  },
  {
    name: `${weight} Regular`,
    description: 'Weight padrão usada na maioria do site',
    font: {
      weight: weights.regular,
    },
  },
  {
    name: `${weight} Bold`,
    description:
      'Weight usada para dar destaque, como por exemlplo em subTitulos',
    font: {
      weight: weights.bold,
    },
  },
  {
    name: `${weight} Black`,
    description:
      'Weight usada para dar destaque a algo, como por exemplo em titulos',
    font: {
      weight: weights.black,
    },
  },
];
