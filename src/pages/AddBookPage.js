import React, { Component } from "react";

import SearchBar from "../components/SearchBar";
import * as BooksAPI from "../BooksAPI";

import Book from "../components/Book";

class AddBookPage extends Component {
  state = {
    query: "",
    books: [],
  };

  searchBooks = () => {
    if (this.state.query !== "") {
      BooksAPI.search(this.state.query).then((books) => {
        this.setState({ books: books.error ? [] : books });
      });
    } else {
      this.setState({ books: [] });
    }
  };
  handleChange = (event) => {
    this.setState(
      {
        query: event.target.value,
      },
      () => {
        this.searchBooks();
      }
    );
  };
  render() {
    return (
      <div className="search-books">
        <SearchBar handleChange={this.handleChange} query={this.state.query} />
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default AddBookPage;
