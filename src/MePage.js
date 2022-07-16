import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./MePage.css";

function MePage ({meData}) { 
    
   const navigate = useNavigate() 

    return (
        <div className="MeProfile">
            <nav className="LogIn">
                <Link className="navBtn" to="/main" >Sign In</Link>
                <button className="navBtn" onClick={() => navigate("/main")}>Password</button>
            </nav>
            <img className="myProfileImg" src="https://twitter-clone-crossover.herokuapp.com/images/9.jpg" alt="error display"></img>
            <div className="UserProperties">
                <p>{meData.twitter_name}</p>
                <p>no #id{meData._id}</p>
                <p>{meData.email}</p>
                <p>{meData.phone}</p>
            </div>
        </div>
    )
}

export default MePage
