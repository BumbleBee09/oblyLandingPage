import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import DigitalLab from './components/DigitalLab/DigitalLab.jsx';
import Client from './components/Client/Client.jsx'; 

function App() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col bg-custom-gradient">
      <Navbar />
      <DigitalLab />
      <Client />
    </div>
  );
}

export default App;
