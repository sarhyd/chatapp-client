import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="msgInput">
      <input
        className="input"
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={ev => setMessage(ev.target.value)}
        onKeyPress={ev => (ev.key === "Enter" ? sendMessage(ev) : null)}
      />
      <button
        className="sendMsgBtn"
        onClick={ev => {
          sendMessage(ev);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Input;
