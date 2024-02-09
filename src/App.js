import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './components/About';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const setmsg = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#232D3F';
      setmsg("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      setmsg("Light mode has been enabled", "success");
    }
  }
  return (
    <>
        <Navbar title="Text Studio" mode={mode} togglemode={togglemode} aboutText="About" />
        <Alert alert={alert} />
        <div className="container my-5">
          <TextForm heading="Enter your text to analyze and format" mode={mode} togglemode={togglemode} setmsg={setmsg} />
          

        </div>
        {/* <div className='container'>
      <About/>
      </div> */}
    </>
  );
}

export default App;
