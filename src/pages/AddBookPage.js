import React from "react";

import SearchBar from "../components/SearchBar";

const AddBookPage = ({ handleShow }) => (
  <div className="search-books">
    <SearchBar handleShow={handleShow} />
    <div className="search-books-results">
      <ol className="books-grid" />
    </div>
  </div>
);

export default AddBookPage;
