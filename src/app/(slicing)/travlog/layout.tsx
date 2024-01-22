'use client';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './travlog.scss';
import logoImg from '~/assets/travlog/logo.png';
import { TravelContainer } from './container';
import { footerLinks, navlinks } from './dummy';

type TravelogLayoutProps = {
  children: React.ReactNode;
};

export default function TravelogLayout({ children }: TravelogLayoutProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* navbar */}
      <Box as="nav" w={'full'} position={'fixed'} py={'8'} zIndex={'docked'} bgColor={'white'}>
        <TravelContainer>
          <Flex display={'flex'} justifyContent={'space-between'}>
            <Image src={logoImg.src} alt={logoImg.src} />

            <UnorderedList listStyleType={'none'} display={{ base: 'none', laptop: 'flex' }} gap={'12'}>
              {navlinks.map((navlink, idx) => (
                <ListItem key={idx}>
                  <Link href={'#'}>{navlink.name}</Link>
                </ListItem>
              ))}
            </UnorderedList>

            <Flex display={{ base: 'none', tablet: 'flex' }} gap={'4'}>
              <Button colorScheme={'purple'} width={'100px'} rounded={'full'}>
                Login
              </Button>
              <Button colorScheme={'purple'} width={'100px'} rounded={'full'}>
                Register
              </Button>
            </Flex>

            <IconButton
              aria-label="menu-button"
              colorScheme="purple"
              order={{ tablet: '-1' }}
              display={{ laptop: 'none' }}
              icon={<Icon as={FaBars} fontSize={'2xl'} />}
              onClick={onToggle}
            />
          </Flex>

          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <UnorderedList
              listStyleType={'none'}
              display={{ laptop: 'none' }}
              spacing={'4'}
              mt={'2'}
              ml={'0'}
              pl={'4'}
              borderLeft={2}
              borderStyle={'solid'}
            >
              {navlinks.map((navlink, idx) => (
                <ListItem key={idx}>
                  <Link href={'#'}>{navlink.name}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Collapse>
        </TravelContainer>
      </Box>

      <TravelContainer py={'32'}>
        {children}

        {/* footer */}
        <Flex flexDirection={{ base: 'column', laptop: 'row' }} gap={'16'}>
          <Stack gap={'8'}>
            <Box>
              <Image src={logoImg.src} alt={logoImg.src} />
            </Box>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC.
            </Text>
            <Stack direction={'row'}>
              <IconButton
                icon={<Icon as={FaFacebookF} />}
                aria-label="facebook"
                colorScheme={'purple'}
                rounded={'full'}
              />
              <IconButton icon={<Icon as={FaTwitter} />} aria-label="twitter" colorScheme={'purple'} rounded={'full'} />
              <IconButton
                icon={<Icon as={FaInstagram} />}
                aria-label="instagram"
                colorScheme={'purple'}
                rounded={'full'}
              />
            </Stack>
          </Stack>

          <Accordion allowMultiple display={{ tablet: 'none' }}>
            {footerLinks.map((footer, idx) => (
              <AccordionItem key={idx}>
                <AccordionButton>
                  <Heading size={'md'} flex={'1'} textAlign={'left'}>
                    {footer.title}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <UnorderedList listStyleType={'none'} spacing={'4'}>
                    {footer.links.map((link, idx) => (
                      <ListItem key={idx}>
                        <Link href="#">{link.name}</Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Flex display={{ base: 'none', tablet: 'flex' }} gap={'8'} justifyContent={'space-between'}>
            {footerLinks.map((footer, idx) => (
              <Stack key={idx} spacing={'8'}>
                <Heading as={'h4'} size={'md'}>
                  {footer.title}
                </Heading>
                <UnorderedList listStyleType={'none'} spacing={'6'} marginInlineStart={'0'}>
                  {footer.links.map((link, idx) => (
                    <ListItem key={idx}>
                      <Link whiteSpace={'pre'}>{link.name}</Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Stack>
            ))}
          </Flex>
        </Flex>
      </TravelContainer>
    </>
  );
}
