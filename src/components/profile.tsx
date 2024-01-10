"use client"
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import NLink from 'next/link';
import React from 'react';
import Fade from 'react-reveal/Fade';
import ssamsara98 from '~/assets/ssamsara98.png';

export const Profile: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <VStack id={id} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
      <Fade top>
      <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', md: '4xl' }}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            bg: 'red.400',
            zIndex: -1,
          }}
        >
          Profile
        </Text>
      </Heading>
      </Fade>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 20 }} alignItems="center">
        <Flex w={1 / 3}>
          <Fade left>
          <Box position={'relative'} rounded={'full'} boxShadow={'2xl'} overflow={'hidden'}>
            <Image
              alt={'Sulthon Abdul Malik'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={ssamsara98.src}
            />
          </Box>
          </Fade>
        </Flex>
        <Flex w={2 / 3} direction="column">
          <Fade right>
          <>
            <Text textAlign="justify" fontSize={{ base: 'xl', md: '3xl' }}>
              Someone who passionate about programming and solving challenging problems, proficient in an assortment of
              technologies and able to self-manage during independent projects, as well as collaborate in a team
              setting.
            </Text>
            <Text textAlign="justify" fontSize={{ base: 'xl', md: '3xl' }}>
              Interested in utilizing expertise in software development and eager to learn more about technologies.
            </Text>
          </>
          </Fade>
        </Flex>
      </Stack>
      <Fade bottom>
      <Link
        as={NLink}
        href="https://drive.google.com/file/d/1XGkx91rqpmI3Uopu3KJJsiGTc6rjM4Ez/view"
        target="_blank"
        fontSize="xl"
        bgGradient="linear(to-r, blue.500, purple.600)"
        bgClip="text"
      >
        Download my resume here
      </Link>
      </Fade>
    </VStack>
  );
};
