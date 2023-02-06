import { colors } from '../../../../global';

export const colorsMap = [
  // principal colors
  {
    name: 'Primary',
    description: 'Most frequently used color on the website.',
    color: colors.primary,
  },
  {
    name: 'Secundary',
    description:
      'Color used a lot on the website but a little less than the primary.',
    color: colors.secundary,
  },
  {
    name: 'Black',
    description: 'Default color to have in every theme.',
    color: colors.black,
  },
  {
    name: 'White',
    description: 'Default color to have in every theme.',
    color: colors.white,
  },
  {
    name: 'Transparent',
    description: 'Used as backgrounds, modals.',
    color: colors.transparent,
  },
  {
    name: 'Disabled',
    description: 'Used for disables and loadings.',
    color: colors.disabled,
  },

  // buttons colors
  {
    name: 'Button primary',
    description: 'Default button color.',
    color: colors.button?.primary,
  },
  {
    name: 'Button secundary',
    description: 'Default button text color.',
    color: colors.button?.secundary,
  },
  {
    name: 'Button floating',
    description: 'Default floating button color.',
    color: colors.button?.floating,
  },
  {
    name: 'Button shadow',
    description: 'Default shadow button color.',
    color: colors.button?.shadow,
  },

  // link colors
  {
    name: 'Link primary',
    description: 'Default link color.',
    color: colors.link?.primary,
  },
  {
    name: 'Link hover',
    description: 'Default hover link color.',
    color: colors.link?.hover,
  },

  // table colors
  {
    name: 'Table primary',
    description: 'Default table color.',
    color: colors.table?.primary,
  },
  {
    name: 'Table border',
    description: 'Default border table color.',
    color: colors.table?.border,
  },
  {
    name: 'Table separator',
    description: 'Default separator table color.',
    color: colors.table?.separator,
  },

  // forms colors
  {
    name: 'Forms primary',
    description:
      'Default forms color, used in input, select and others inside the forms.',
    color: colors.forms?.primary,
  },
  {
    name: 'Forms hover',
    description:
      'Default hover forms color, used in input, select and others inside the forms.',
    color: colors.forms?.hover,
  },
  {
    name: 'Forms focus',
    description:
      'Default hover forms color, used in input, select and others inside the forms.',
    color: colors.forms?.focus,
  },
  {
    name: 'Forms border',
    description:
      'Default hover forms color, used in input, select and others inside the forms.',
    color: colors.forms?.border,
  },

  // suport colors
  {
    name: 'Success',
    description: 'Used as an indication of success.',
    color: colors.support?.sucess,
  },
  {
    name: 'Warning',
    description: 'Used as an indication of alert',
    color: colors.support?.warning,
  },
  {
    name: 'Error',
    description: 'Used as an indication of error',
    color: colors.support?.error,
  },
];
