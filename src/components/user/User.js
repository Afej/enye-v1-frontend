import React from "react";
import "./user.scss";

const User = ({ user }) => {
  return (
    <div className="user">
      <h1>{`${user.FirstName} ${user.LastName}`}</h1>
      <p>
        {user.Gender}{" "}
        {user.Gender === "Male" ? (
          <i className="fas fa-male"></i>
        ) : user.Gender === "Female" ? (
          <i className="fas fa-female"></i>
        ) : (
          <i className="far fa-smile-wink"></i>
        )}
      </p>
    </div>
  );
};

export default User;
