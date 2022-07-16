import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./MePage.css";

function MePage ({me}) { 
    
   const navigate = useNavigate() 

    return (
        <div className="MeProfile">
            <nav className="LogIn">
                <Link className="navBtn" to="/main" >Sign In</Link>
                <button className="navBtn" onClick={() => navigate("/main")}>Password</button>
            </nav>
            <img className="myProfileImg" src="https://twitter-clone-crossover.herokuapp.com/images/9.jpg" alt="error display"></img>
            <div className="UserProperties">
                <p>{me.twitter_name}</p>
                <p>{me._id}</p>
                <p>{me.email}</p>
                <p>{me.phone}</p>
            </div>
        </div>
    )
}

export default MePage
