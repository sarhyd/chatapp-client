import React from "react";
import "./UserInfo.css";

const UserInfo = ({ users }) => {
  return (
    <div>
      {users.map(user => {
        return <div className="user">{user.name}</div>;
      })}
    </div>
  );
};

export default UserInfo;
