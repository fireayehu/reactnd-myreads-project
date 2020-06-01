import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AddBookPage from "./pages/AddBookPage";
import HomePage from "./pages/HomePage";

class BooksApp extends React.Component {
  state = {
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
