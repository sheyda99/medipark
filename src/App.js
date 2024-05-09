import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/haqqimizda" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App