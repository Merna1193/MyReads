import React, { Component } from 'react'


class UpdateShelf extends Component {

    handelSubmit = (e, bookData) => {
        const bookShelfState = e.target.value
        const book = bookData
        if (this.props.updateShelf) {
            this.props.updateShelf(book, bookShelfState)
        }
    }

    render() {
        const { bookData, booksOnShelves } = this.props;
        console.log(bookData)
        console.log(booksOnShelves)
        let currentBookShelf = 'none';

        for (let Mybook of booksOnShelves) {
            if (Mybook.id === bookData.id) {
                currentBookShelf = item.shelf;
                break;
            }
        }
        return (
            <div className="book-shelf-changer">
                <select defaultValue={currentBookShelf} onChange={(e) => this.handelSubmit(e, this.props.bookData)} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default UpdateShelf