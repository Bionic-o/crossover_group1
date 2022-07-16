import React from "react"
import "./header.css"


function Header ({users}) {
    return (
        <div className="leftPane">
        <div className='leftPane-cont'>
            <div>
            <i className="fa-brands fa-twitter"></i>
            </div>
            
            <div className='user'>
                <a href='#'>
                <img src='' alt='user-image' width='50px'/>
                <div className='user-name'>
                    <p>Georasam</p>
                    <p className='nickName'>@Georasam</p>
                </div>
                <div><i className="fa-brands fa-gg-circle"></i></div>
                </a>
            </div>
        </div>
    </div>

    )
}

export default Header