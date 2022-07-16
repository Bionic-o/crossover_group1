import React from "react"
<<<<<<< Updated upstream
import "./Header.css"
import logo from "../logo-rond-twitter.png"
=======
import './Header.css'
import ReactDom from "react-dom";
>>>>>>> Stashed changes

const Header = () => {
    return (
<<<<<<< Updated upstream
        <div className="leftPane">
        <div className='leftPane-cont'>
            <div>
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className='leftPane-icons'>
                <div><a href=''><i className="fa-solid fa-house"></i> Home</a></div>
                <div><a href=''><i className="fa-brands fa-wpexplorer special"></i> Explore</a></div>
                <div><a href=''><i className="fa-regular fa-bell special"></i> Notification</a></div>
                <div><a href=''><i className="fa-regular fa-envelope"></i> Message</a></div>
                <div><a href=''><i className="fa-regular fa-bookmark"></i> Bookmark</a></div>
                <div><a href=''><i className="fa-brands fa-elementor special"></i> Lists</a></div>
                <div><a href=''><i className="fa-regular fa-user special"></i> Profile</a></div>
                <div><a href=''><i className="fa-brands fa-gg-circle special"></i> More</a></div>
                <button>Tweet</button>
            </div>
            <div className='user'>
                <a href='#'>
                <img src={logo} alt='user-image' width='50px'/>
                <div className='user-name'>
                    <p>Georasam</p>
                    <p className='nickName'>@Georasam</p>
                </div>
                <div><i className="fa-brands fa-gg-circle"></i></div>
                </a>
            </div>
        </div>
    </div>
=======
        <select>
            <option value="Profile">Profile</option>
            <option value="List">List</option>
            <option select value="Menu">
                Menu
            </option>
            <option value="Settings and Privacy">Settings and Privacy</option>
        </select>
    );
};
>>>>>>> Stashed changes

ReactDom.render(<Header />, document.querySelector("#root"));