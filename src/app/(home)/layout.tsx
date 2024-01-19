import React from 'react';
import { Container } from '@chakra-ui/react';
import { Footer } from '~/components/footer';
import { Navbar } from '~/components/header';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container maxW={{ md: 'container.md', laptop: 'containerl.xl', desktop: '7xl' }}>{children}</Container>
      <Footer />
    </>
  );
}
