import React from 'react';
import Hero from '../../component/Hero/Hero';
import Work from '../../component/Work/Work';
import ExperienceSection from '../../component/ExperienceSection/ExperienceSection';
import StackSection from '../../component/StackSection/StackSection';
import ContactSection from '../../component/Contact/ContactSection';
import Footer from '../../component/Footer/Footer';

const Home = () => (
  <main>
    <Hero />
    <Work />
    <ExperienceSection />
    <StackSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Home;
