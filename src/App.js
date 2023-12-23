import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import KeyFeatures from './pages/KeyFeatures';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import TryForFree from './pages/TryForFree';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/features' Component={KeyFeatures} />
          <Route path='/pricing' Component={Pricing} />
          <Route path='/testimonials' Component={Testimonials} />
          <Route path='/demo' Component={TryForFree} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
