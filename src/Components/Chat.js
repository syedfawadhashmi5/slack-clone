import React, { useState, useEffect } from "react";
import db from "../service/config";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useParams } from "react-router-dom";
import Message from './Message'
import ChatInput from './ChatInput'
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages, roomId)

  return (
    <div className="chat">
      {/* <h2>You are in the {roomId} room</h2> */}
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong> #{roomDetails?.name} </strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {/* Messages component will come here */}
        
        {roomMessages.map(({ message, timestamp, user, userImage, file }) => (
          <Message key={message}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            file={file}
          />
        ))}
      </div>
      <ChatInput channelName = {roomDetails?.name} channelId ={roomId} />  
    </div>
  );
}

export default Chat;
