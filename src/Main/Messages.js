import UserShow from "./UserShow";
import { Link } from "react-router-dom";

function Messages ({userMessages, userData}){
    //console.log(userMessages)
    return (
        <div className="message">
            <UserShow usershow={userData} userid={userMessages.author} />
            <div className="leftpane">
                <div className="oneMsg">
                    <Link to="/aboutuser">{userMessages.text}</Link>

                </div>
            </div>
        </div>
    )
}
export default Messages;