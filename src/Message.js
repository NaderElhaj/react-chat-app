import React from 'react'
import './Message.css'
import { useStateValue } from './StateProvider';


function Message({message,timestamp,userProp,userImage}) {
    const [{user}] = useStateValue();

    return (
        <div className={user.displayName===userProp ? "message sender" : "message receiver" }>
            <img src={userImage} alt="profile image" className="avatar" /> 
            <div className="message__info">
                <h4>
                    {userProp} <small className="message__timestamp">{new Date(timestamp).toString().substr(0,20)} </small> 
                </h4>
                <p>{message} </p>
            </div>

        </div>
    )
}

export default Message
