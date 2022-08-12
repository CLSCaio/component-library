import React from 'react';

import { Container, Content, Description, Media } from './styles';

type MediasProps = {
  name: string;
  description: string;
  media: string;
};

interface MediasDescriptionProps {
  mediasNames: MediasProps[];
}

export const MediasDescription = ({ mediasNames }: MediasDescriptionProps) => (
  <Container>
    {mediasNames.map(({ media, description, name }) => (
      <Content key={name}>
        <Media>{media}</Media>
        <Description>
          <strong>{name}</strong>
          <span>{description}</span>
        </Description>
      </Content>
    ))}
  </Container>
);
