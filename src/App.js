import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { useState } from 'react';



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
  }

  const toggleMode =()=>{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light Mode Enabled", "success");
  }

  const togglemode = ()=>{
    if(mode==="dark"){
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Enabled", "success");
    }
  }

  return (
    <>

      
<Navbar title="EasyAnalyser" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>

<Router>
      <Routes>
        <Route path="/About" element={<About mode={mode} />} />
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </Router>

    <Footer/>
      
    </>
  );
};

export default App;
