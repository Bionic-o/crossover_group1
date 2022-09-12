/* import {BrowserRouter} from "react-dom-router" */
import React, {useState, useEffect }from "react";
import {  Routes, Route } from "react-router-dom";

import Main from "./Main";
import MePage from "./MePage";
/* const randomIndex = Math.floor(Math.random()* result.length ) 
    setRandomUser(result[randomIndex]) */


const App = () => {
  
const[ meData,setMeData]= useState([])
useEffect(()=> { getMe()},[])
  const getMe = async ()=>{
    const response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues`)
    if (response.ok){
      const result = await response.json()
      //console.log(result)
      setMeData(result)
    }
    
  }
  



  
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<MePage meData={meData}  />} />
          <Route path="/main" element={<Main  medata={meData}/>} />
        </Routes>
      
    </div>
  );
};

export default App;