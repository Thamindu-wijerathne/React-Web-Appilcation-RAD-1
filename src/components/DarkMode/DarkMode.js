import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  // Function to set dark mode
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  };

  // Function to set light mode
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  };

  // Function to toggle theme and store the state in local storage
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  // useEffect hook to apply the theme from local storage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode();
      document.getElementById('darkmode-toggle').checked = true;
    } else {
      setLightMode();
    }
  }, []);

  // [] used to ensure that this function runs only one time. dependancy array
  // Only once when the component mounts. It doesn't depend on any state or props changes.

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
