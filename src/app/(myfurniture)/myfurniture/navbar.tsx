'use client';
import { Box, Flex, Icon, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NLink from 'next/link';
import { BiShoppingBag, BiUser } from 'react-icons/bi';
import { MyContainer } from './container';

export function Navbar() {
  return (
    <Box color={'white'} bgColor={'furniture.primary'} py={'4'} position={'fixed'} zIndex={'10'} w={'full'}>
      <MyContainer as="nav" display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Text fontSize={'2xl'}>
          <Box as={'span'} color={'furniture.secondary'}>
            My
          </Box>
          Furniture
        </Text>

        <Flex gap={'20'} display={{ base: 'none', lg: 'flex' }}>
          <UnorderedList listStyleType={'none'} display={'flex'} gap={'14'} fontSize={'lg'}>
            <ListItem>
              <Link as={NLink} href="#" color={'furniture.secondary'}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NLink} href="#services">
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NLink} href="#product">
                Product
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NLink} href="#blog">
                Blog
              </Link>
            </ListItem>
            <ListItem>
              <Link as={NLink} href="#contact-us">
                Contact Us
              </Link>
            </ListItem>
          </UnorderedList>

          <Flex gap={'12'} color={'furniture.secondary'}>
            <Icon as={BiUser} boxSize={'8'} />
            <Icon as={BiShoppingBag} boxSize={'8'} />
          </Flex>
        </Flex>
      </MyContainer>
    </Box>
  );
}
