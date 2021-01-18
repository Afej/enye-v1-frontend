import React from "react";
import "./search.scss";

const Search = ({ query, onChange }) => {
  return (
    <section className="search-wrapper">
      <form>
        <input
          type="text"
          name="search"
          className="search-input"
          placeholder="Search by Name"
          value={query}
          onChange={onChange}
        />
        {/* <button type="submit" className="search-btn">
          Search
        </button> */}
      </form>
    </section>
  );
};

export default Search;
