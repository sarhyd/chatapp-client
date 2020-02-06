import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ name, msg: { user, msg } }) => {
  const cleanName = name.trim().toLowerCase();
  const isCurrentUser = cleanName === user ? true : false;
  const className = isCurrentUser ? "userMessage" : "message";

  return (
    <div className={`baseMsg ${className}`}>
      <span className="sender">{user}</span>
      <p className="text">{ReactEmoji.emojify(msg)}</p>
    </div>
  );
};

export default Message;
