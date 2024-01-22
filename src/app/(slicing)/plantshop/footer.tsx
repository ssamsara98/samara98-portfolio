'use client';
import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const links = [
  {
    title: 'Services',
    contents: ['House Plant', 'Garden Plant', 'Vase', 'House Plant'],
  },
  {
    title: 'Information',
    contents: ['Office Hours', 'Requirements', 'About us'],
  },
  {
    title: 'Helpfull Link',
    contents: ['Service', 'Support', 'Terms & Condition', 'Privacy Policy'],
  },
  {
    title: 'Address',
    contents: ['Jl Gatot Subroto\nNo. 123 Blok. A23\nMalang, Jawa Timur'],
  },
];

const date = new Date();

export function Footer() {
  return (
    <>
      <Box borderTopRadius={'3xl'} bgColor={'plantshop.green'} color={'white'}>
        <Container maxW={'1452px'} pt={'40'} mb={'20'}>
          <Flex>
            <Box mr={'80'}>
              <Text fontSize={'3xl'} fontWeight={'bold'} color={'plantshop.yellow'} mb={'8'} textAlign={'center'}>
                Plant
                <Box as="span" color={'plantshop.cream'}>
                  Shop
                </Box>
              </Text>
              <Text fontSize={'lg'} mb={'6'}>
                help.iplant@mailsac.com
              </Text>
              <Text fontSize={'lg'} mb={'14'}>
                +6281234567890
              </Text>

              <Flex justify={'space-between'} color={'plantshop.yellow'}>
                <Icon as={FaWhatsapp} boxSize={'10'} />
                <Icon as={FaInstagram} boxSize={'10'} />
                <Icon as={FaFacebook} boxSize={'10'} />
              </Flex>
            </Box>

            <Flex justify={'space-between'} w={'100%'}>
              {links.map((link, idx) => (
                <Box key={idx}>
                  <Text color={'plantshop.cream'} fontSize={'xl'} fontWeight={'bold'} mb={'8'}>
                    {link.title}
                  </Text>
                  <Box>
                    {link.contents.map((content, idx2) => (
                      <Text key={idx2} fontSize={'lg'} mb={'5'} whiteSpace={'pre-wrap'}>
                        {content}
                      </Text>
                    ))}
                  </Box>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>

        <Text fontSize={'lg'} textAlign={'center'}>
          &copy; Copyright {date.getFullYear()} All Right Reserve | Built by Sulthon Abdul Malik
        </Text>
      </Box>
    </>
  );
}
