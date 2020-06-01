import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage books={this.state.books} />}
          />
          <Route exact path="/search" render={() => <AddBookPage />} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
