import React from 'react';

import { Container, Content, Description, Color } from './styles';

type ColorProps = {
  name: string;
  description: string;
  color: string;
};

interface ColorsDescriptionProps {
  colorNames: ColorProps[];
}

export const ColorsDescription = ({ colorNames }: ColorsDescriptionProps) => (
  <Container>
    {colorNames.map(({ color, description, name }) => (
      <Content key={color}>
        <Color color={color} />
        <Description>
          <strong>{name}</strong>
          <span>{description}</span>
        </Description>
      </Content>
    ))}
  </Container>
);
