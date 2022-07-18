import "./NewsFeed.css";
import Messages from "./Messages"; 
import {Routes, Route} from "react-router-dom";
import AboutUser from "../AboutUser";
import UserShow from "./UserShow";

function NewsFeed ({userProps, userMessage}) {
    //console.log(userMessage)
    return (
        <div>
            {userMessage.map((message, index) => {
                return(
                    <div>
                        <Messages userMessages={message} userData={userProps}/>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsFeed