import { fonts } from '../../../../global';

const font = 'Font-size';

export const fontsMap = [
  // font-size
  {
    name: `xSmall`,
    description:
      'Font usada para textos muito pequenos, com pouco destaque no site.',
    font: {
      size: fonts.sizes.xSmall,
    },
  },
  {
    name: `Small`,
    description: 'Font usada para textos pequenos.',
    font: {
      size: fonts.sizes.small,
    },
  },
  {
    name: `Default`,
    description: 'Font padrão usado em quase todos o site.',
    font: {
      size: fonts.sizes.default,
    },
  },
  {
    name: `Medium`,
    description:
      'Font usada para dar um pouco mais de destaque do que a default.',
    font: {
      size: fonts.sizes.medium,
    },
  },
  {
    name: `Large`,
    description:
      'Font usada para dar destaque a algo, como por exemplo em subTitulos.',
    font: {
      size: fonts.sizes.large,
    },
  },
  {
    name: `xLarge`,
    description:
      'Font usada para dar destaque a algo, como por exemplo em titulos.',
    font: {
      size: fonts.sizes.xLarge,
    },
  },
  {
    name: `Huge`,
    description: 'Font usada para texto muito grandes.',
    font: {
      size: fonts.sizes.huge,
    },
  },

  // font weight
  {
    name: `extraLight`,
    description: 'Weight usada a algo com pouco destaque',
    font: {
      weight: fonts.weights.extraLight,
    },
  },
  {
    name: `Regular`,
    description: 'Weight padrão usada na maioria do site',
    font: {
      weight: fonts.weights.regular,
    },
  },
  {
    name: `Bold`,
    description:
      'Weight usada para dar destaque, como por exemlplo em subTitulos',
    font: {
      weight: fonts.weights.bold,
    },
  },
  {
    name: `Black`,
    description:
      'Weight usada para dar destaque a algo, como por exemplo em titulos',
    font: {
      weight: fonts.weights.black,
    },
  },
];
