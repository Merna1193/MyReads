import React, { Component } from 'react'
import BookSearchList from './bookSearchList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
}
  state = {
    query: '',
    
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if (this.props.onSearch) {
      this.props.onSearch(query)
    }
  }

  render() {
    const { query } = this.state
    const { books, updateShelf,booksOnShelves} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <BookSearchList booksOnShelves={booksOnShelves} books={books} state={"none"} updateShelf={updateShelf} />
        </div>
      </div>
    )
  }
}
export default Search