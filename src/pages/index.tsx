import { Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import HeroHome from '~/components/home/hero';
import Profile from '~/components/home/profile';
import Projects from '~/components/home/projects';
import Footer from '~/layouts/footer/footer';
import Navbar from '~/layouts/navbar/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <Container maxW={'7xl'}>
        <HeroHome id="hero" />
        <Profile id="profile" />
        <Projects id="projects" />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
