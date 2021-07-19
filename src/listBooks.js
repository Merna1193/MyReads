import React from 'react'
import BookCategoryList from './bookCategoryList';
import { Link } from 'react-router-dom'
const ListBooks = (props) => {
    const { books, updateShelf } = props

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BookCategoryList books={books} state={"currentlyReading"} updateShelf={updateShelf} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BookCategoryList books={books} state={"wantToRead"} updateShelf={updateShelf} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BookCategoryList books={books} state={"read"} updateShelf={updateShelf} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"></Link>
            </div>
        </div>
    )
}
export default ListBooks