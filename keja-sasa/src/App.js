// src/App.js
import React from 'react';
// src/index.js or src/App.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import HomeSection from './components/homesection';
import SearchResults from './components/SearchResults';
import HouseDetails from './components/HouseDetails';
import './App.css';
import HouseDetailsSections from './components/HouseDetailsSection';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <HomeSection /> {/* HomeSection added here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/houses" element={<SearchResults />} />
            <Route path="/house/:id" element={<HouseDetails />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;