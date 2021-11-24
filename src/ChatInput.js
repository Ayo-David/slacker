import React, { useState } from 'react';
import "./ChatInput.css"
import db from './firebase';
import { useDataLayer } from './StateProvider';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState("");
    const [{ user }] = useDataLayer();

    const sendMessage = (e) => {
        e.preventDefault()

        //  if(channelId){
        //     let payload = {
        //         message: input,
        //         timestamp: firebase.firestore.Timestamp.now(),
        //         user: user.displayName,
        //         userImage: user.photoURL
        //     }
        //     db.collection("rooms").doc(channelId).collection('messages').add(payload);
        // }

        //console.log(input)
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.displayName,
                userImage: user.photoURL
            })

        }
    }
    return (
        <div className="chatInput">
            <form onSubmit={sendMessage}>
                <input

                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <button type="submit" >SEND</button>
            </form>

        </div>
    );
}

export default ChatInput;
