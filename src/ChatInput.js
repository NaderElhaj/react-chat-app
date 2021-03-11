import React , {useState} from 'react'
import './ChatInput.css'
import db from './firebase'
import { useStateValue } from './StateProvider';
import firebase from 'firebase'




function ChatInput({channelName,channelId}) {

const [input,setInput] = useState('');
const [{user}] = useStateValue();
console.log(user)

const sendMessage = e => {
    e.preventDefault();
    console.log("hi")
    console.log(channelId)
    if(channelId) {
        db.collection('rooms').doc(channelId).collection("messages").add({
            message : input,
            timestamp : Date.now(),
            user : user.displayName,
            userImage : user.photoURL
            
        }).then(()=>console.log("sent")).catch(err=>console.log(err))
    }

};

    return (
        <div className="chatInput">
            <form >
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message # ${channelName}`} />
                <button type="submit"  onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
