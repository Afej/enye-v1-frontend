import React from "react";
import "./user.scss";

const User = ({ user }) => {
  return (
    <div className="user">
      <h1>{`${user.FirstName} ${user.LastName}`}</h1>
    </div>
  );
};

export default User;
