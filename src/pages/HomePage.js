import React from "react";
import BooksShelf from "../components/BooksShelf";
const HomePage = ({ handleShow, books }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">
      <div>
        <BooksShelf title="Currently Reading" books={books.currentlyReading} />
        <BooksShelf title="Want to Read" books={books.wantToRead} />
        <BooksShelf title="Read" books={books.read} />
      </div>
    </div>
    <div className="open-search">
      <button onClick={handleShow}>Add a book</button>
    </div>
  </div>
);

export default HomePage;
