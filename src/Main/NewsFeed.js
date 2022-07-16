import React, {useState} from "react"
import "./NewsFeed.css";
import Messages from "./Messages"; 
import UserShow from "./UserShow";

function NewsFeed ({userData, userMessages}) {
    //console.log(userMessages)
    return (
        <div>
            {userMessages.map((message, index) => {
                return(
                        <Messages userMessages={message} userData={userData}/>
                )
            })}
        </div>
    )
}

export default NewsFeed