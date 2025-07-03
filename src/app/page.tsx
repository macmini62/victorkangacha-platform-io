'use client'

import About from '@/components/sections/about';
import FeaturedProjects from '@/components/sections/featured-projects';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Hero />
      <About/>
      <FeaturedProjects/>
    </main>
  );
}
