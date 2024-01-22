'use client';
import {
  Box,
  // Button,
  Container,
  Flex,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { HiSearch, HiShoppingBag, HiUser } from 'react-icons/hi';
import { navigations } from './dummy';

export function Navbar() {
  return (
    <>
      <Box as="nav" position={'fixed'} bgColor={'white'} w={'full'} zIndex={'100'}>
        <Container maxW={{ xl: '1452px' }}>
          <Flex justify={'space-between'} py={'12'}>
            {/* Logo */}
            <Text color={'plantshop.green'} fontSize={'3xl'} fontWeight={'bold'}>
              Plant
              <Box as="span" color={'plantshop.yellow'}>
                Shop
              </Box>
            </Text>

            {/* Navigations */}
            <UnorderedList listStyleType={'none'} display={'flex'} alignItems={'center'} gap={'14'} fontSize={'xl'}>
              {navigations.map((navi) => (
                <ListItem key={navi.name} color={navi.name === 'Home' ? 'plantshop.green' : 'grey'} fontWeight={'bold'}>
                  {navi.name}
                </ListItem>
              ))}
            </UnorderedList>

            {/* Buttons */}
            <Flex align={'center'} fontSize={'2xl'} color={'plantshop.green'} gap={12} fontWeight={'bold'}>
              <Icon as={HiSearch} />
              <Icon as={HiShoppingBag} />
              <Icon as={HiUser} />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
