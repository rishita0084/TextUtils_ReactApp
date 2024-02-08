import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#333b37';
      showAlert("Dark mode has been enabled!","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
   
     <>
    <BrowserRouter>
    
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} about="About Text Utils"/>
      <div className="container">
        <Alert alert={alert}/>
      </div>

      <Routes> 
          <Route exact path="/about" element={<div className="container my-3">
              <About heading="About us:"  mode={mode}/>
            </div>}>     
          </Route>
          
          <Route exact path="/TextUtils_ReactApp" element={<div className="container my-3">
              <TextForm heading="Enter the text to analyze:" mode={mode} showAlert={showAlert}/>
            </div>}>
          </Route>
      </Routes>
    </BrowserRouter>
     </>


   
  );
}

export default App;
