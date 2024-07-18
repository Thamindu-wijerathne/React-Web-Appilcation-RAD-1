import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Greeting from './components/Greeting/Greeting';
import ContactForm from './components/Contact_Us/Contact_Us';
import Home from './components/Home/Home';
import About from './components/About/About';
import Timer from './components/Timer/Timer';
import SpeedDial from './components/SpeedDial/SpeedDial'
import Member1 from './components/About/team/Member1/Member1';
import Member2 from './components/About/team/Member2/Member2';


function App() {
  const location = useLocation();

  return(
      <div className="App">
      <div className="background"></div>
      <div className="overlay"></div>
      <Navbar />
      {/* Conditionally render Greeting based on the current path */}
      {location.pathname === '/' && (
        <React.Fragment>
          <Greeting />
          <Timer />
        </React.Fragment>
      )}
      <Routes>
        <Route path="/Contact_Us" exact element={<ContactForm />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/team/Member1" element={<Member1  />} />
        <Route path="/team/Member2" element={<Member2  />} />
        
      </Routes> 
      
      <SpeedDial />
    </div>
  );
}

export default App;
