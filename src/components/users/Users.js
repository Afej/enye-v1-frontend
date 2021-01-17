import React, { useState, Fragment } from "react";
import Spinner from "../spinner/Spinner";
import User from "../user/User";
import UserDetails from "../user/UserDetails";

import "./users.scss";

const Users = ({ query, users, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <section className="user-grid">
        {users.length ? (
          users.map((user) => (
            <User
              key={user.UserName}
              user={user}
              showDetails={() => {
                setModalData(user);
                setIsModalOpen(true);
              }}
            />
          ))
        ) : (
          <p className="error-text">
            No Results for <span> "{query}" </span>
            Found.
          </p>
        )}
      </section>

      {/* user details modal */}
      <UserDetails
        data={modalData}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </Fragment>
  );
};

export default Users;
