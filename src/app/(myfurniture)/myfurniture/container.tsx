import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';

export const MyContainer = (props: ContainerProps) => {
  return <Container maxW={{ base: 'full', md: 'container.md', lg: 'container.lg', xl: 'container.xl' }} {...props} />;
};
