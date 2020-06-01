import React from "react";
import Book from "../components/Book";

const BooksShelf = ({ title }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
        <Book />
      </ol>
    </div>
  </div>
);

export default BooksShelf;
