import React , {useState} from 'react'
import './ChatInput.css'
import db from './firebase'
import { useStateValue } from './StateProvider';
import firebase from './firebase'




function ChatInput({channelName,channelId}) {

const [input,setInput] = useState('');
const [{user}] = useStateValue();


const sendMessage = e => {
    e.preventDefault();
    if(channelId) {
        db.collection('rooms').docs(channelId).collection("messages").add({
            message : input,
            timestamp : firebase.firestore.FieldValue.server,
            user : user.displayName,
            userImage : user.photoUrl
            
        })
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
