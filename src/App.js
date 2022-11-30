import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    setMode('light');
    document.body.style.backgroundColor="white";
  }

  const togglemode = ()=>{
    if(mode==="dark"){
      setMode('light');
      document.body.style.backgroundColor="white";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
  <TextForm heading="Enter the text to analyze below" mode={mode}/>
{/* <About/> */}
    </>
  );
}

export default App;
