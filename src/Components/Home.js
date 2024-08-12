import React, { useRef, useEffect } from 'react';
import HeroSection from './HeroSection';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snacks from './Snacks';
import Drinks from './Drinks';

function Home() {
  const heroRef = useRef(null);
  const breakfastRef = useRef(null);
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
  const snacksRef = useRef(null);
  const drinksRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -150; // Offset for the fixed navbar
    const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        ref={heroRef}
        scrollToBreakfast={() => scrollToSection(breakfastRef)}
        scrollToLunch={() => scrollToSection(lunchRef)}
        scrollToDinner={() => scrollToSection(dinnerRef)}
        scrollToSnacks={() => scrollToSection(snacksRef)}
        scrollToDrinks={() => scrollToSection(drinksRef)}
      />
      <div ref={breakfastRef}>
        <Breakfast />
      </div>
      <div ref={lunchRef}>
        <Lunch />
      </div>
      <div ref={dinnerRef}>
        <Dinner />
      </div>
      <div ref={snacksRef}>
        <Snacks />
      </div>
      <div ref={drinksRef}>
        <Drinks />
      </div>
    </>
  );
}

export default Home;
