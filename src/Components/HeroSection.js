import React, { forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Banner from '../Assets/banner1.png';
import Header from './Header';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div className='hero-section' ref={ref}>
      <Header
        scrollToBreakfast={props.scrollToBreakfast}
        scrollToLunch={props.scrollToLunch}
        scrollToDinner={props.scrollToDinner}
        scrollToSnacks={props.scrollToSnacks}
        scrollToDrinks={props.scrollToDrinks}
      />
      <div className='container banner-container'>
        <img
          src={Banner}
          alt='InfoTaam Banner'
          className='banner-image'
        />
      </div>
    </div>
  );
});

export default HeroSection;
