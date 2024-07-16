import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Components/Home';
import Breakfast from './Components/Breakfast';
import Drinks from './Components/Drinks';
import Snacks from './Components/Snacks';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';

function App() {
  return (
    <>
      <Home/>
      <Breakfast/>
      <Drinks/>
      <Snacks/>
      <Lunch/>
      <Dinner/>
    </>
  );
}

export default App;
