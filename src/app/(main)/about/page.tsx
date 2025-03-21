import React from 'react';
import OurStory from '@/components/aboutus/ourstory';
import OurApproach from '@/components/aboutus/ourapproach'
import Testimonials from '@/components/aboutus/testimonials';
import Contact from '@/components/aboutus/contact';
import Footer from '@/components/Navbar/footer';
import Hero from '@/components/HeroSection/hero';
import { hero_data_aboutus } from '@/constants/constants';
const AboutUs = () => {
  
  return (
    <div className="">
      <Hero t1={hero_data_aboutus.t1} t2={hero_data_aboutus.t2} description={hero_data_aboutus.description} src={hero_data_aboutus.src} />
      <OurStory />
      <OurApproach />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default AboutUs;
