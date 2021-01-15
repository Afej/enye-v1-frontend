import React, { useState } from "react";
import "./search.scss";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    // getQuery(q);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="search-wrapper">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a profile"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
