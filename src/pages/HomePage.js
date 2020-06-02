import React from "react";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";

const HomePage = ({ books, updateBookShelf }) => {
  const categorizeBooks = (books) => {
    const categorizedShelf = { currentlyReading: [], wantToRead: [], read: [] };
    for (let book of books) {
      categorizedShelf[book.shelf].push(book);
    }
    return categorizedShelf;
  };

  const { currentlyReading, wantToRead, read } = categorizeBooks(books);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BooksShelf
            title="Currently Reading"
            books={currentlyReading}
            updateBookShelf={updateBookShelf}
          />
          <BooksShelf
            title="Want to Read"
            books={wantToRead}
            updateBookShelf={updateBookShelf}
          />
          <BooksShelf
            title="Read"
            books={read}
            updateBookShelf={updateBookShelf}
          />
        </div>
      </div>
      <Link className="open-search" to="/search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

export default HomePage;
