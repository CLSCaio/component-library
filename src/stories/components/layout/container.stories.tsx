import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react';

import { Container } from '../../../components';
import { ContainerProps } from '../../../components/layouts/container/interface';

export default {
  title: 'Layouts/Container',
  component: Container,
} as Meta;

const H1 = styled.h1`
  width: max-content;
`;

export const Overview: Story<ContainerProps> = args => (
  <Container {...args}>
    <>
      <H1> caio </H1> <H1> sousa </H1>
    </>
  </Container>
);

Overview.args = {
  mobileResponsive: true,
  direction: 'column',
};
