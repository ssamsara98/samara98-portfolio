'use client';
import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

export function TravelContainer(props: ContainerProps) {
  return (
    <Container
      maxW={{
        base: 'full',
        tablet: 'container.md',
        laptop: 'container.xl',
      }}
      px={{
        base: '4',
        tablet: '8',
        laptop: '12',
      }}
      {...props}
    />
  );
}
