/* import {BrowserRouter} from "react-dom-router" */
import React, {useState, useEffect }from "react";
import {  Routes, Route } from "react-router-dom";

import Main from "./Main";
import MePage from "./MePage";
const users = [
  {
    id: 1,
    username : "jack",
    email: "hey@hoo.com",
    phone: 1231231234

  },{
    id: 2,
    username : "jill",
    email: "hoo@hoo.com",
    phone: 1231231234

  }
]
const App = () => {

  /* const getUsers = async ()=>{
    const response = await fetch('https://twitter-clone-crossover.herokuapp.com/users')
    const result =await response.json()
    console.log(result)
  }
  getUsers() */
  const   [cloneUser, setCloneUser]= useState(users)
console.log(cloneUser)
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<MePage users={users} setCloneUser={setCloneUser} cloneUser={cloneUser} />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      
    </div>
  );
};

export default App;