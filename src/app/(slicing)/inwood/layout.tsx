'use client';
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  ListItem,
  Stack,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import inwoodLogoImg from '~/assets/inwood/inwood-logo.png';
import { navbarLinks } from './data';
import { InContainer } from './page-client';

type InWoodLayoutProps = {
  children: React.ReactNode;
};

export default function InWoodLayout({ children }: InWoodLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Navbar */}
      <Box w={'full'} position={'fixed'} py={'7'} zIndex={'10'} bgColor={'white'} color={'inwood.primaryDark'}>
        <InContainer>
          <Flex justify={'space-between'} fontSize={'2xl'}>
            {/* Logo */}
            <Image
              src={inwoodLogoImg.src}
              alt={inwoodLogoImg.src}
              order={{ base: '1', tablet: '0' }}
              h={{ base: '6', tablet: '10' }}
            />

            {/* menu */}
            <Box order={{ base: '0', tablet: '1' }}>
              <IconButton
                icon={<Icon as={FaBars} />}
                aria-label="menu-button"
                bgColor={'transparent'}
                onClick={() => {
                  onToggle();
                }}
                display={{ base: 'inline-flex', desktop: 'none' }}
              />

              <UnorderedList
                listStyleType={'none'}
                display={{ base: 'none', desktop: 'flex' }}
                justifyContent={'space-between'}
                gap={'14'}
              >
                {navbarLinks.map((navbar, idx) => (
                  <ListItem key={idx}>
                    <Link href="#">{navbar.name}</Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>

            <Flex gap={{ base: '3', tablet: '14' }} order={{ base: '2' }}>
              <Icon as={FaSearch} />
              <Icon as={FaShoppingCart} />
              <Icon as={FaUser} />
            </Flex>
          </Flex>

          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
              display={{ base: 'flex', desktop: 'none' }}
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'solid'}
              // borderColor={useColorModeValue('gray.200', 'gray.700')}
              align={'start'}
            >
              {navbarLinks.map((navbar, idx) => (
                <Link key={idx} py={2} href={navbar.href}>
                  {navbar.name}
                </Link>
              ))}
            </Stack>
          </Collapse>
        </InContainer>
      </Box>
      {children}
    </>
  );
}
