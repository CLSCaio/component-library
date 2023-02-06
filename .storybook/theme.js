import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  colorPrimary: '#000',
  colorSecondary: '#708090' ,

  // UI
  appBg: '#000',
  appBorderColor: '#000',
  appBorderRadius: 4,
  appContentBg: '#fff',

  // Typography
  // fontBase: '',
  // fontCode: '',

  // Text colors
  textColor: "#00BFFF",
  textInverseColor: '#fff',
  textMutedColor: "#00BFFF",

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: "#00BFFF",
  barBg: '#000',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#000',
  inputTextColor: '#000',
  inputBorderRadius: 4,

  // Title
  brandTitle: 'cls-master-lib-qa',
  // brandImage: ',
  brandTarget: '_blank',
  brandUrl: 'https://github.com/CLSCaio/component-library',
});