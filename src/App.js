import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks';
import Search from './search';
import Notmatch from './notMatch';
import { Route,Switch } from 'react-router-dom'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books
    }));
  };

  updateBookShelf = (book, bookShelfState) => {
    const changedBook = book
    BooksAPI.update(changedBook, bookShelfState)
      .then((response) => {
        BooksAPI.getAll().then((books) => this.setState({
          books
        }));
      })
  };
  searchBook = (query) => {
    const newQuery = query.trim()
    if (newQuery) {
      BooksAPI.search(newQuery).then((response) => {
        response.length > 0
          ? this.setState({ showSearchBooks: response })
          : this.setState({ showSearchBooks: [] });


      })
    }
    else {
      this.setState({ showSearchBooks: [] });
    }
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} updateShelf={this.updateBookShelf} />
          )}
          />

          <Route exact path='/search' render={() => (<Search
           booksOnShelves={this.state.books} 
           books={this.state.showSearchBooks} 
           updateShelf={this.updateBookShelf} 
           onSearch={this.searchBook} />)} />
           <Route component={Notmatch} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
