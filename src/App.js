import React from 'react';
import './App.css';
import unit from './Images/units/unit.png'

function App() {
  return (
    <div>
      <h1>Unit Product Selector</h1>
      <div className='unitOverlay'>
        <img alt="unitOverlay" src={unit}/>
      </div>
      
    </div>
  );
}

export default App;
