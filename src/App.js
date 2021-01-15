import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "./components/search/Search";
import Pagination from "./components/pagination/Pagination";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://api.enye.tech/v1/challenge/records");
      const profiles = res.data.records.profiles;
      setUsers(profiles);
      setLoading(false);
    };

    fetchUsers();
  }, [query]);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      {/* header */}
      <Header />

      {/* search  */}
      <Search getQuery={(q) => setQuery(q)} />

      {/* filter */}
      <Filter />

      {/* users  */}
      <Users users={currentUsers} loading={loading} />

      {/* pagination */}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
