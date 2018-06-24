import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

export default ({ routes }) => (
  <div className="App">
    <Navbar />
    <div className="content container">
      { routes }
    </div>
  </div>
);
