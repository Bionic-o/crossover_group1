import UserShow from "./UserShow";

function Messages ({userMessages, userData}){
    return (
        <div>
            <UserShow usershow={userData} userid={userMessages.author} />
            <div className="leftpane">
                <div>
                    {userMessages.text}
                </div>
            </div>
        </div>
    )
}
export default Messages;