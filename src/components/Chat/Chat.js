import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import UserInfo from "../UserInfo/UserInfo";

import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  const ENDPOINT = "https://shyder-chatapp.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    const handleFail = error => {
      console.log(`Error: ${error}`);
    };

    socket.emit("join", { name, room }, handleFail);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
      console.log("Messages received", messages);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ room, users }) => {
      setUsers([...users]);
      console.log(`Users for ${room} received: ${users}`);
    });
  }, [users]);

  // function for sending messages
  const sendMessage = ev => {
    console.log(`SendMessage: ${message}`);
    ev.preventDefault();
    if (message) {
      console.log("setting message to null");
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="mainContainer">
      <div className="chatroom">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} className="msgArea" />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <UserInfo users={users} />
    </div>
  );
};

export default Chat;
