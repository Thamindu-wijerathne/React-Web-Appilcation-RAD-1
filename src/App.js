import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Greeting from './components/Greeting/Greeting';
import ContactForm from './components/Contact_Us/Contact_Us';
import Home from './components/Home/Home';
import About from './components/About/About';
import DarkMode from './components/DarkMode/DarkMode';
import Timer from './components/Timer/Timer';


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
      </Routes>

      <DarkMode />      
    </div>
  );
}

export default App;
