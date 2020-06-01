import React from "react";
import BooksShelf from "../components/BooksShelf";
const HomePage = ({ handleShow }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <div>
        <BooksShelf title="Currently Reading" />
        <BooksShelf title="Want to Read" />
        <BooksShelf title="Read" />
      </div>
    </div>
    <div className="open-search">
      <button onClick={handleShow}>Add a book</button>
    </div>
  </div>
);

export default HomePage;
