import React, { useState } from 'react';
import GuestHeader from '../components/GuestHeader';
import '../components/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import B_SearchBar from '../components/B_SearchBar';
import GoogleMaps from '../components/GoogleMaps';

// Home Landing Page
function Binh() {
  return (
    <div>
      <Header />
      <B_SearchBar />
      <Footer />
    </div>
  );
}

export default Binh;
