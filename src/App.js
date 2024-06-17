import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import DigitalLab from './components/DigitalLab/DigitalLab.jsx'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-custom-gradient">
    <Navbar/>
    <DigitalLab />
    </div>
  );
} 

export default App;
