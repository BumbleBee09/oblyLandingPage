import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import DigitalLab from './components/DigitalLab/DigitalLab.jsx';
import Client from './components/Client/Client.jsx';
import Services from './components/Services/Services.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx'; 

function App() {
  return (
    <>
    <div className="min-h-screen max-w-screen flex flex-col bg-custom-gradient">
      <Navbar />
      <DigitalLab />
      <Client />
      <Services />
    </div>
    <div className="min-h-screen max-w-screen flex flex-col bg-custom-gradient2">
    <AboutUs />
    </div>

    </>

  );
}

export default App;
