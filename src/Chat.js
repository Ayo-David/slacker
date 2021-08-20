import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Chat.css"
import db from './firebase';

const Chat = (props) => {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
    }, [roomId]);
    console.log(roomDetails);
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
        </div>
    );
}

export default Chat;
