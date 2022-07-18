/* import {BrowserRouter} from "react-dom-router" */
import React, {useState, useEffect }from "react";
import {  Routes, Route } from "react-router-dom";

import Main from "./Main";
import MePage from "./MePage";
import AboutUser from "./AboutUser";
/* const randomIndex = Math.floor(Math.random()* result.length ) 
    setRandomUser(result[randomIndex]) */


const App = () => {
  
const[ meData,setMeData]= useState([])
useEffect(()=> { getMe()},[])
  const getMe = async ()=>{
    const response = await fetch(`https://twitter-clone-crossover.herokuapp.com/me`)
    const result = await response.json()
    //console.log(result)
    setMeData(result)
  }

  const[ userData,setUserData]= useState([])
  const [userMessages, setUserMessages]=useState([])
useEffect(()=> { getUser();
getMessage();
},[])
const getUser = async ()=>{
  const response = await fetch(`https://twitter-clone-crossover.herokuapp.com/users`)
  const result = await response.json()
 /*  console.log(result) */
  setUserData(result)
}
  const getMessage = async ()=>{
      const response = await fetch(`https://twitter-clone-crossover.herokuapp.com/messages`)
      const result = await response.json()
     /*  console.log(result) */
      setUserMessages(result)
}
  



  
  return (
    <div>
        <Routes>
          <Route path="/" element={<MePage me={meData}  />} />
          <Route path="/main" element={<Main userMessages={userMessages} userData={userData}/>} />
          <Route path="/aboutuser" element ={<AboutUser userMessages={userMessages} userData={userData}/>} />
        </Routes>
    </div>
  );
};

export default App;