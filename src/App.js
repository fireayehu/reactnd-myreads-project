import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import AddBookPage from "./pages/AddBookPage";
import HomePage from "./pages/HomePage";
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
    showSearchPage: false,
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.categorizeBooks(books));
  }

  categorizeBooks(books) {
    const currentBookState = { ...this.state.books };
    for (let book of books) {
      currentBookState[book.shelf].push(book);
    }
    this.setState(() => ({
      books: currentBookState,
    }));
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <AddBookPage
            handleShow={() => this.setState({ showSearchPage: false })}
          />
        ) : (
          <HomePage
            handleShow={() => this.setState({ showSearchPage: true })}
            books={this.state.books}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
