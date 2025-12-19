import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';
import SnowWrapper from '@/components/SnowWrapper'; // Import it here
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16 relative">
      <SnowWrapper /> {/* Add it here */}
      <Hero />
      <Work />
      <About />
    </Container>
  );
}