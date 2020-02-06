import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infobar">
      <a href="/">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </a>
      <div className="float-left">
        <h3>{room}</h3>
      </div>
      <div className="rightContainer"></div>
    </div>
  );
};

export default InfoBar;
