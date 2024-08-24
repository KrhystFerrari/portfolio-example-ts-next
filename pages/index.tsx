import About from '@/components/About';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, { useState } from 'react';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
