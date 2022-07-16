

function UserShow({usershow, userid}){
    console.log(usershow, userid)
    const targetAuthor = usershow.find((user) => {
        return (
            userid === user._id
        )
    });
    console.log(targetAuthor)
    return (
        <h1>{targetAuthor.twitter_name}</h1>
    )
}
export default UserShow