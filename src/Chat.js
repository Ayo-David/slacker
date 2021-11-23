import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Chat.css"
import ChatInput from './ChatInput';
import db from './firebase';
import Message from './Message';

const Chat = (props) => {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
            db.collection('rooms').doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => (
                    setRoomMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId]);
    //console.log(roomMessages);
    return (
        <div className="chat">

            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>

            </div>
            <div className="chat__messages">
                {roomMessages?.map(({ message, timestamp, user, userimage }) => (
                    <Message
                        message={message}
                        timmestamp={timestamp}
                        user={user}
                        userImage={userimage}
                    />
                ))}
            </div>
            <ChatInput
                channelName={roomDetails?.name}
                channelId={roomId} />
            {console.log(`Thias is the room ID ${roomId} and room name ${roomDetails?.name}`)}
        </div>
    );
}

export default Chat;
