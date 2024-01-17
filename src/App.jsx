// src/App.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/templates/Home';
import About from './components/templates/About';
import Navigation from './components/templates/Navigation';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import './App.css';

const App = () => {

  return (
    <div className="app">

      <Router>
      <Header />
      <Navigation />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
