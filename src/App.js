import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Maow from './routes/Maow';
import Signup from './routes/Signup';
import Davis from './routes/Davis';
import React from 'react';
import Nico from './routes/Nico';
import Binh from './routes/Binh';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="Davis" element={<Davis/>} />
            <Route path="Nico" element={<Nico/>} />
            <Route path="Binh" element={<Binh/>} />
            <Route path="Maow" element={<Maow/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/googlemaps" element={<Signup/>} />
          </Routes>
      </Router>
  );
}

export default App;
