/* import {BrowserRouter} from "react-dom-router" */
import React, {useState, useEffect }from "react";
import {  Routes, Route } from "react-router-dom";

import Main from "./Main";
import MePage from "./MePage";

const App = () => {
  const testusers = [
    {
      id: 1,
      username : "jack",
      email: "hey@hoo.com",
      phone: 1231231234,
       twitts: ['test', 'test2' ,'test3']
  
    },{
      id: 2,
      username : "jill",
      email: "hoo@hoo.com",
      phone: 1231231234,
      twitts: ['test', 'test2' ,'test3']
  
    }
  ]
  const[ users,setUsers]= useState(testusers)
  const   [randomUser, setRandomUser]= useState({})
useEffect(()=> { getUsers()

},[users])
  const getUsers = async ()=>{
    const response = await fetch(`https://twitter-clone-crossover.herokuapp.com/me`)
    const result = await response.json()
    console.log(result)
    setUsers(result)
    /* const randomIndex = Math.floor(Math.random()* result.length ) 
    setRandomUser(result[randomIndex]) */
  }
  
  
console.log(randomUser)
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<MePage users={users}  />} />
          <Route path="/main" element={<Main  users={users}/>} />
        </Routes>
      
    </div>
  );
};

export default App;