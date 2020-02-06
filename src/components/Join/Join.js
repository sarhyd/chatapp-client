import React, { useState } from "react";
import { link, Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container main mx-auto col-12">
      <form>
        <h1 className="display text-center text-info mx-auto">Join</h1>
        <div className="mt-4">
          <input
            className="form-control textInput"
            type="text"
            placeholder="Name"
            onChange={ev => setName(ev.target.value)}
          />
        </div>
        <div className="mt-4">
          <input
            className="form-control textInput"
            type="text"
            placeholder="Room"
            onChange={ev => setRoom(ev.target.value)}
          />
        </div>
        <div>
          <Link
            onClick={ev => (!name || !room ? ev.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
            className="justify-content-center"
          >
            <button className="btn join mt-4 btn-md btn-primary" type="submit">
              Join Chatroom
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Join;
