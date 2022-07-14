/* import {BrowserRouter} from "react-dom-router" */
import React, {useState} from 'react';
import Main from "./Main"

function App() {
  const enterApp = () =>{
    console.log("test")
    return (
      <div>
      <Main/>
      </div>
     
    )
  }
  return (
    <div>
      <button  onClick={() => enterApp()}>Sign in</button>
      <button>Password</button>
      <img/>
      
      
      <ul>

      </ul>
    </div>
  );
}

export default App;
