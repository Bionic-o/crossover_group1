import React from "react"
import { Route, Routes, NavLink, BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

function MePage () {   
    return (
        <div>
            <Router>
            <nav>
                <NavLink className="link" to="/main">Sign In</NavLink>
                <NavLink className="link" to="/main">Password</NavLink>
            </nav>
            <img alt=""></img>
            <ul>
                <li>Username</li>
                <li>#id</li>
                <li>E-Mail</li>
                <li>Phone</li>
            </ul>
                <Routes>
                    <Route path="/main" element={<Main/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default MePage