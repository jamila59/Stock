import React from 'react';
import './App.css';
import Stock from './components/Stock.js';
import Crypto from './components/Crypto';

function App() {
  return (
    <div className="App">
      <Stock/>
      <Crypto/>
    </div>
  );
}

export default App;
