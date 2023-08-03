import React, { useState } from 'react';
import '../components/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import N_SearchBar from '../components/N_SearchBar';

// Home Landing Page
function Nico() {
  return (
    <div>
      <Header />
      <N_SearchBar />
      <Footer />
    </div>
  );
}

export default Nico;
