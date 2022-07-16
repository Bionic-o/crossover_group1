import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./MePage.css";

function MePage ({cloneUser}) {  
    const randomUser = Math.floor(Math.random()* cloneUser.length ) 
   console.log(cloneUser.length) 
   const navigate = useNavigate() 

    return (
        <div className="MeProfile">
            <nav className="LogIn">
                <Link className="navBtn" to="/main">Sign In</Link>
                <button className="navBtn" onClick={() => navigate("/main")}>Password</button>
            </nav>
            <img className="myProfileImg" src="https://p.kindpng.com/picc/s/699-6997496_round-avatar-hd-png-download.png" alt="error display"></img>
            <div className="UserProperties">
                <p>UserName :{cloneUser[randomUser].username}</p>
                <p>#id : {cloneUser[randomUser].id}</p>
                <p>E-Mail: {cloneUser[randomUser].email}</p>
                <p>Phone : {cloneUser[randomUser].phone}</p>
            </div>
        </div>
    )
}

export default MePage
