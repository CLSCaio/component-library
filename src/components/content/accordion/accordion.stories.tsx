import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Accordion, AccordionProps } from '@components';

export default {
  title: 'Content/Accordion',
  component: Accordion,
} as Meta;

export const Overview: Story<AccordionProps> = args => <Accordion {...args} />;

Overview.args = {
  list: [
    {
      description: 'description with <strong> innerhtml </strong>',
      isInnerHtml: true,
      title: 'Accotions with innerHtml',
    },
    {
      description: 'description without <strong> innerHtml </strong>',
      title: 'Accordion without innerHtml',
    },
  ],
};
