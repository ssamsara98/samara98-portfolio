'use client';
import { Link } from '@chakra-ui/next-js';
import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade';

export const Projects: React.FC<{ id: string }> = ({ id }) => {
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
            Projects
          </Text>
        </Heading>
      </Fade>
      <Fade bottom>
        <Text fontSize={{ base: '2xl', md: '4xl' }} bgGradient="linear(to-r, blue.500, purple.600)" bgClip="text">
          Coming Soon...
        </Text>
        <Text>
          or visit my{' '}
          <Link href="https://github.com/ssamsara98" target="_blank">
            Github
          </Link>
        </Text>
      </Fade>
    </VStack>
  );
};
