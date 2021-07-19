import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UpdateShelf from './updateShelf.js'


class BookCategoryList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
        state: PropTypes.string.isRequired,
    }
    render() {
        const { books, updateShelf, state } = this.props
        return (
            <ol className="books-grid">
                {books.filter(currentReadBook => currentReadBook.shelf === state || '').map((book) => (
                    <li key={book.id} >
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                <UpdateShelf booksOnShelves={books} bookData={book} updateShelf={updateShelf} />
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
export default BookCategoryList