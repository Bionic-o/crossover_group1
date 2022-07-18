function UserShow({usershow, userid}){
    //console.log(usershow, userid)
    const targetAuthor = usershow.find((user) => {
        return (
            userid === user._id
        )
    });
    return (
        <div className="messageHeader">
            {/* <img className="userimg" src={`https://twitter-clone-crossover.herokuapp.com/images/${targetAuthor.image}`} alt="cant display"></img>
            <h4>{targetAuthor.twitter_name}</h4> */}
        </div>
    )
}
export default UserShow