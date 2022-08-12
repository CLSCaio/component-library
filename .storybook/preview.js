import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Provider } from '../src/index'

const customViewports = {
  small: {
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
        "Change-log",
        "Foundations",
        "Actions",
        "Forms",
        "Layouts",
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
    <Provider>
      <Story /> 
    </Provider>
  ),
];