'use client';
import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi';
import { links } from './dummy';

const date = new Date();

export function Footer() {
  return (
    <>
      <Box color={'white'} bgColor={'furniture.primary'} py={'8'}>
        <Container
          maxW={{ base: 'full', md: 'container.md', lg: 'container.lg', xl: 'container.xl' }}
          display={'flex'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          py={'24'}
        >
          <Box fontSize={'xl'} mb={{ base: '20', md: '0' }}>
            <Text fontSize={'3xl'} mb={'12'}>
              <Box as="span" color={'furniture.secondary'}>
                My
              </Box>
              Furniture
            </Text>

            <Flex gap={6} direction={'column'} mb={'14'}>
              <Text>help.iplant@mailsac.com</Text>
              <Text>+6281234567890</Text>
            </Flex>

            <Flex gap={'5'} color={'furniture.secondary'}>
              <Icon as={BiLogoWhatsapp} boxSize={'12'} />
              <Icon as={BiLogoInstagram} boxSize={'12'} />
              <Icon as={BiLogoFacebook} boxSize={'12'} />
            </Flex>
          </Box>

          <Flex columnGap={'24'} rowGap={'10'} wrap={'wrap'}>
            {links.map((link, idx) => (
              <Box key={idx}>
                <Text fontSize={'xl'} fontWeight={'bold'} mb={'8'}>
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
        </Container>

        <Text fontSize={'lg'} textAlign={'center'}>
          &copy; Copyright {date.getFullYear()} All Right Reserve | Built by Sulthon Abdul Malik
        </Text>
      </Box>
    </>
  );
}
