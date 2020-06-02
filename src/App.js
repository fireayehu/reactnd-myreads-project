import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import AddBookPage from "./pages/AddBookPage";
import HomePage from "./pages/HomePage";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      const exists = this.state.books.find((b) => b.id === book.id);
      book.shelf = shelf;
      if (exists) {
        this.setState((prevState) => ({
          books: [...prevState.books.map((b) => (b.id === book.id ? book : b))],
        }));
      } else {
        this.setState((prevState) => ({
          books: [...prevState.books, book],
        }));
      }
    });
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                books={this.state.books}
                updateBookShelf={this.updateBookShelf}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <AddBookPage
                updateBookShelf={this.updateBookShelf}
                books={this.state.books}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
