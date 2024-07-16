import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './Components/Home';
import Breakfast from './Components/Breakfast';
import Drinks from './Components/Drinks';

function App() {
  return (
    <>
      <Home/>
      <Breakfast/>
      <Drinks/>
    </>
  );
}

export default App;
