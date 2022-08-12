import React from 'react';

import { Container, Content, Description, Font } from './styles';

type FontsProps = {
  name: string;
  description: string;
  font: {
    size?: string;
    weight?: string;
  };
};

interface FontsDescriptionProps {
  fontsNames: FontsProps[];
}

export const FontsDescription = ({ fontsNames }: FontsDescriptionProps) => (
  <Container>
    {fontsNames.map(({ font, description, name }) => (
      <Content key={name}>
        <Font fontS={font.size} fontW={font.weight}>
          {font.size?.replace('rem', '') || font.weight}
        </Font>
        <Description>
          <strong>{name}</strong>
          <span>{description}</span>
        </Description>
      </Content>
    ))}
  </Container>
);
