import React from "react";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";

const HomePage = ({ books }) => (
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
    <Link className="open-search" to="/search">
      <button>Add a book</button>
    </Link>
  </div>
);

export default HomePage;
