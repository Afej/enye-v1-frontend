import React from "react";
import Spinner from "../spinner/Spinner";
import User from "../user/User";
import "./users.scss";

const Users = ({ query, users, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="user-grid">
      {users.length ? (
        users.map((user) => <User key={user.UserName} user={user} />)
      ) : (
        <p className="error-text">
          No Results for <span> "{query}" </span>
          Found.
        </p>
      )}
    </section>
  );
};

export default Users;
