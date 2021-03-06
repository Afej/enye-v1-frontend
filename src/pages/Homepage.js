import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Users from "../components/users/Users";
import Search from "../components/search/Search";
import Pagination from "../components/pagination/Pagination";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";

const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [paymentMethods, setPaymentMethods] = useState(new Set());
  const [genders, setGenders] = useState(new Set());

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://api.enye.tech/v1/challenge/records");
      const profiles = res.data.records.profiles;

      setUsers(profiles);

      profiles.forEach((profile) =>
        setPaymentMethods(paymentMethods.add(profile.PaymentMethod))
      );

      profiles.forEach((profile) => setGenders(genders.add(profile.Gender)));

      setLoading(false);
    };

    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const filteredUsers = users.filter((user) => {
    return (
      (user.FirstName.toLowerCase().startsWith(query.trim().toLowerCase()) ||
        user.LastName.toLowerCase().startsWith(query.trim().toLowerCase())) &&
      user.Gender.includes(selectedGender) &&
      user.PaymentMethod.includes(selectedPaymentMethod)
    );
  });

  const onFilterChange = (e) => {
    e.target.name === "search"
      ? setQuery(e.target.value)
      : e.target.name === "gender"
      ? setSelectedGender(e.target.value)
      : setSelectedPaymentMethod(e.target.value);

    setCurrentPage(1);
  };

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const isLastPage = indexOfLastUser >= filteredUsers.length;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const containerRef = useRef(null);

  const scrollToTop = () => {
    setTimeout(() => {
      containerRef.current.scrollIntoView();
    }, 0);
  };

  return (
    <div className="container" ref={containerRef}>
      {/* header */}
      <Header />

      {/* search  */}
      <Search query={query} onChange={onFilterChange} />

      {/* filter */}
      <Filter
        genders={genders}
        paymentMethods={paymentMethods}
        onChange={onFilterChange}
      />

      {/* users  */}
      <Users
        users={currentUsers}
        loading={loading}
        query={query}
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
        isLastPage={isLastPage}
        totalUsers={filteredUsers.length}
      />

      {/* pagination */}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={filteredUsers.length}
        paginate={paginate}
        currentPage={currentPage}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Homepage;
