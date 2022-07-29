import React, {useState} from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
   Routes ,  //same as switch
  Route,

} from "react-router-dom";

function App() {

  const[mode, setMode]=useState('light');
   const[alert, setAlert]=useState();

  const showAlert =(message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout (()=>{
       setAlert(null);
    }, 1000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light  mode has been enabled", "success");


    }
  }
  return (
  <>
  <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}  /> 
    
    <Routes>
          <Route exact path="/about" element= {<About mode={mode}/>} ></Route>
         
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} ></Route>
        </Routes>
   </Router>
   
  </>

  );
}

export default App;
