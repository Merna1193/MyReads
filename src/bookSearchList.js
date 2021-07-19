import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UpdateShelf from './updateShelf.js'


class BookSearchList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
    }
    render() {
        const { books, updateShelf,booksOnShelves } = this.props 
        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id} >
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" 
                                style={{ backgroundImage: 
                                    `url(${book.imageLinks && book.imageLinks.thumbnail? book.imageLinks.thumbnail : ''})` }}></div>
                                <UpdateShelf booksOnShelves={booksOnShelves} bookData={book} updateShelf={updateShelf} />
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>

                    </li>
                ))

                }
            </ol>

        )
    }
}
export default BookSearchList