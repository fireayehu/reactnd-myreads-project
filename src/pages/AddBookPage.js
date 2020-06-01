import React from "react";

import SearchBar from "../components/SearchBar";

const AddBookPage = () => (
  <div className="search-books">
    <SearchBar />
    <div className="search-books-results">
      <ol className="books-grid" />
    </div>
  </div>
);

export default AddBookPage;
