import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import './plantshop.scss';
import { Navbar } from './navbar';
import { Footer } from './footer';

type PlantShopLayoutProps = {
  children: React.ReactNode;
};

export default function PlantShopLayout({ children }: PlantShopLayoutProps) {
  return (
    <Box>
      <Navbar />

      <Container display={'flex'} flexDir={'column'} gap={'60'} maxW={{ xl: '1452px' }} mb={'24'} pt={'48'}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
}
