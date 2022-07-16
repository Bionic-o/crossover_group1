import React, {useState, useEffect } from "react"
import Header from "./Main/Header"
import NewsFeed from "./Main/NewsFeed"
import Footer from "./Main/Footer"


function Main () {
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
            <Header />
            <NewsFeed userMessages={userMessages} userData={userData} />
            <Footer />
        </div>
    )
}

export default Main