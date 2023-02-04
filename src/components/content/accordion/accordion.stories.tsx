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
      description:
        "pode passar algum html harder code como um <strong> 'strong' </strong> ou um <br/> 'br' para pular linha e etc...",
      isInnerHtml: true,
      title: 'Um Accordion com innerHtml',
    },
    {
      description:
        "pode passar algum html harder code como um <strong> 'strong' </strong> ou um <br/> 'br' para pular linha e etc...",
      title: 'Um Accordion sem innerHtml',
    },
  ],
};
