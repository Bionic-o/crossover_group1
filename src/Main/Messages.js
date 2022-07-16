import UserShow from "./UserShow";

function Messages ({userMessages, userData}){
    return (
        <div className="message">
            <UserShow usershow={userData} userid={userMessages.author} />
            <div className="leftpane">
                <div className="oneMsg">
                    {userMessages.text}
                </div>
            </div>
        </div>
    )
}
export default Messages;