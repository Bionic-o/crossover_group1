import React, {useState, useEffect } from "react"
import Header from "./Main/Header"
import NewsFeed from "./Main/NewsFeed"
import Footer from "./Main/Footer"


function Main ({userMessages, userData}) {
    
  
 
  
    return (
        <div>
            <Header />
            <NewsFeed userMessage={userMessages} userProps={userData}/>
            <Footer />
        </div>
    )
}

export default Main