import React from "react";
import "./App.css";

const SearchForm = ({search, getSearch, updateSearch}) => {
  return (
    <form onSubmit={getSearch} className="search-form">
      <input
        id="search-bar"
        type="text"
        value={search}
        className="search-bar"
        onChange={updateSearch}
        placeholder="Chicken, Mango, Banana...."
        autoComplete="off"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
