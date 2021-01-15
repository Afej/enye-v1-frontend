import React from "react";
import Spinner from "../spinner/Spinner";
import User from "../user/User";
import "./users.scss";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="user-grid">
      {users.map((user) => (
        <User key={user.UserName} user={user} />
      ))}
    </section>
  );
};

export default Users;
