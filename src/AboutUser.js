import React from "react"
import Header from "./Main/Header"
import "./AboutUser.css";

function AboutUser () {
    return (
        <div>
            <Header />
            <img className="userProfileImg" src="https://p.kindpng.com/picc/s/699-6997496_round-avatar-hd-png-download.png" alt="error display"></img>
            <div className="userProperties">
                <p>UserName :</p>
                <p>#id : </p>
                <p>E-Mail: </p>
                <p>Phone : </p>
            </div>
        </div>
    )
}

export default AboutUser