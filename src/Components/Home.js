import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { useRef } from 'react';
import Banner from '../Assets/banner.jpg';
import Header from './Header';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snacks from './Snacks';
import Drinks from './Drinks';

function Home() {
  const breakfastRef = useRef(null);
  const lunchRef = useRef(null);
  const dinnerRef = useRef(null);
  const snacksRef = useRef(null);
  const drinksRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        scrollToBreakfast={() => scrollToSection(breakfastRef)}
        scrollToLunch={() => scrollToSection(lunchRef)}
        scrollToDinner={() => scrollToSection(dinnerRef)}
        scrollToSnacks={() => scrollToSection(snacksRef)}
        scrollToDrinks={() => scrollToSection(drinksRef)}
      />
      <div className='container mt-3'>
        <img
          src={Banner}
          alt='InfoTaam Banner'
          className='banner-image'
        />
      </div>
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
