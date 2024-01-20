import React from 'react';
import { Flex } from '@chakra-ui/react';
import './myfurniture.scss';
import { Footer } from './footer';
import { Navbar } from './navbar';

type MyFurnitureLayoutProps = {
  children: React.ReactNode;
};

export default function MyFurnitureLayout({ children }: MyFurnitureLayoutProps) {
  return (
    <>
      <Navbar />

      <Flex direction={'column'} minH={'100vh'} justify={'space-between'}>
        {children}

        <Footer />
      </Flex>
    </>
  );
}
