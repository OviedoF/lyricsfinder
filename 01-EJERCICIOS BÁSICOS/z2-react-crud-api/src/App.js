import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Pelicula from './components/pages/Pelicula';
import UseRef from './components/pages/UseRef';

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
          
        <Route path='/' element={<Home />} />

        <Route path='/useref' element={<UseRef />} />

        <Route path='/pelicula/:idPelicula' element={<Pelicula />} />

      </Routes>
    </Router>
  );
}

export default App;
