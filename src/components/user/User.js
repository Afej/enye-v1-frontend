import React from "react";
import "./user.scss";

const User = ({ user, showDetails }) => {
  return (
    <div className="user">
      <h1>{`${user.FirstName} ${user.LastName}`}</h1>
      <p className="gender">
        Gender : {user.Gender}{" "}
        {user.Gender === "Male" ? (
          <i className="icon fas fa-male male"></i>
        ) : user.Gender === "Female" ? (
          <i className="icon fas fa-female female"></i>
        ) : (
          <i className="icon far fa-smile-wink wink"></i>
        )}
      </p>
      <p className="payment-method">Payment Method: {user.PaymentMethod}</p>

      <button className="btn" onClick={showDetails}>
        More details
      </button>
    </div>
  );
};

export default User;
