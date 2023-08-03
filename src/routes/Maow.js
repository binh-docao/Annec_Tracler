import React, { useState } from 'react';
import '../components/about.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import S_SearchBar from '../components/S_SearchBar';

// Home Landing Page
function Maow() {
  return (
    <div>
      <Header />
      <S_SearchBar />
      <Footer />
    </div>
  );
}

export default Maow;
