import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Breakfast from './Components/Breakfast';
import Drinks from './Components/Drinks';
import Snacks from './Components/Snacks';
import Lunch from './Components/Lunch';
import Dinner from './Components/Dinner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Breakfast' element={<Breakfast />} />
        <Route path='/Drinks' element={<Drinks />} />
        <Route path='/Snacks' element={<Snacks />} />
        <Route path='/Lunch' element={<Lunch />} />
        <Route path='/Dinner' element={<Dinner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
