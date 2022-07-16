import React, {useState} from "react"
import "./NewsFeed.css";
import Messages from "./Messages"; 
import UserShow from "./UserShow";

function NewsFeed ({users ,userData, userMessages}) {
    /* userData.map((twitt)=> console.log(twitt)) */
    const[ info,setInfo]= useState([])
   setInfo(prev => (prev.map((element)=>{
    return {...element, }
   })))
       
    console.log(info)
    /* const [user,setUser] = useState([])
    setUser(...user, userData.map((per)=> 
         per.twitter_name
      ))
    console.log(user) */
    
    return (
        <div className="newsFeed">
            <div className="leftpane">
                <UserShow/>
                <Messages/>
                
            </div>
            <div className="rightpane">rightpane</div>
        </div>
    )
}

export default NewsFeed