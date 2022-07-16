import React, {useState} from "react"
import "./NewsFeed.css";
import Messages from "./Messages"; 
import UserShow from "./UserShow";

function NewsFeed ({users ,userData, userMessages}) {
    /* userData.map((twitt)=> console.log(twitt)) */
    
    console.log(userData)
   /*  const [user,setUser] = useState([])
    setUser(...user, userData.map((per)=> 
         per.twitter_name
      )) */
      const moviesList = movies.map((movie, index) => { 
        return (
            <div className="list">
              <li key={index} onClick={() => {
                  console.log("click on movie " + index)
                  setActiveMovieTitle(movie.title)
                  setActiveMovieOverview(movie.overview)
                  setActiveMoviePoster(movie.poster_path)
                  }}>
                <h3>{movie.title}</h3>
              </li>
              <h5><span style={{color: "white"}}>(released in {m
    
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