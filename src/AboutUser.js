import React from "react"
import Header from "./Main/Header"
import "./AboutUser.css";

function AboutUser ({userMessages, userData}) {
    userMessages.map((message) => {
        return (message,
        console.log(message)
        )
    }
    )
  
    return (
        <div>
            <Header />
            <div>
                <img className="userProfileImg" src="https://p.kindpng.com/picc/s/699-6997496_round-avatar-hd-png-download.png" alt="error display"></img>
                <div className="userProperties">
                    <p>user</p>
                    <p>#id : </p>
                    <p>E-Mail: </p>
                    <p>Phone : </p>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default AboutUser