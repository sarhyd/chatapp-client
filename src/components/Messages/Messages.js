import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  console.log("received: ", messages);
  return (
    <ScrollToBottom className="msgArea">
      {messages.map((msg, i) => {
        return <Message key={i} name={name} msg={msg} />;
      })}
    </ScrollToBottom>
  );
};

export default Messages;
