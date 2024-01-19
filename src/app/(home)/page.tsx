import Image from 'next/image';
import { HeroHome } from '~/components/hero';
import { Profile } from '~/components/profile';
import { Projects } from '~/components/projects';

export default function Home() {
  return (
    <>
      <HeroHome id="hero" />
      <Profile id="profile" />
      <Projects id="projects" />
    </>
  );
}
