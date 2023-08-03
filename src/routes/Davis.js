import React, { useState } from 'react';
import GuestHeader from '../components/GuestHeader';
import '../components/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/S_SearchBar';
import D_SearchBar from '../components/D_SearchBar';
import GoogleMaps from '../components/GoogleMaps';

// Home Landing Page
function Davis() {
  return (
    <div>
      <Header />
      <D_SearchBar />
      <Footer />
    </div>
  );
}

export default Davis;
