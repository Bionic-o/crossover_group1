import React from "react"
import Header from "./Main/Header"
import NewsFeed from "./Main/NewsFeed"
import Footer from "./Main/Footer"

function Main ({users}) {
    return (
        <div>
            <Header users={users}/>
            <NewsFeed users={users} />
            <Footer />
        </div>
    )
}

export default Main