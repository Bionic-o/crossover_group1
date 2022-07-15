import React from "react";
import { useNavigate} from "react-router-dom";
import "./MePage.css";

function MePage () {  
    const navigate = useNavigate() 
    return (
        <div className="MeProfile">
            <nav className="LogIn">
                <button className="navBtn" onClick={() => navigate("/main")}>Sign In</button>
                <button className="navBtn" to="/main">Password</button>
            </nav>
            <img className="myProfileImg" src="https://p.kindpng.com/picc/s/699-6997496_round-avatar-hd-png-download.png" alt="error display"></img>
            <div className="UserProperties">
                <p>Username</p>
                <p>#id</p>
                <p>E-Mail</p>
                <p>Phone</p>
            </div>
        </div>
    )
}

export default MePage


/* <div className="MeProfile">
            <Router>
            <nav className="LogIn">
                <Link className="link" to="/main">Sign In</Link>
                <Link className="link" to="/main">Password</Link>
            </nav>
            <img className="myProfileImg" src="https://www.w3schools.com/w3images/avatar2.png" alt="error display"></img>
            <ul>
                <li>Username</li>
                <li>#id</li>
                <li>E-Mail</li>
                <li>Phone</li>
            </ul>
            <Routes>
                <Route exact path="/main" element={<Main/>} />
            </Routes>
            </Router>
        </div> */