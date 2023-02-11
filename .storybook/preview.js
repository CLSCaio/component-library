import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyle } from '../src/stories/reset'

const customViewports = {
  small: {
    name: 'xXsmall',
    styles: {
      width: '300px',
      height: '520px',
    },
    name: 'Small',
    styles: {
      width: '520px',
      height: '740px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '750px',
      height: '740px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '1080px',
      height: '920px',
    },
  },
  extraLarge: {
    name: 'Extra Large',
    styles: {
      width: '1280px',
      height: '920px',
    },
  },
  huge: {
    name: 'Huge',
    styles: {
      width: '1820px',
      height: '920px',
    },
  },
};

export const parameters = {
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Preview" }
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "change-log",
        "change-log-OLD",
        "Foundations",
        "Actions",
        "Forms",
        "Layouts",
        "Content",
        "Utilities",
      ]
    }
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
};

export const decorators = [
  Story => (
   
    <>
      <Story /> 
      <GlobalStyle />
    </>
   
  ),
];