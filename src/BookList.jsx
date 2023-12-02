import React, { useState } from "react";
import "./BookList.css";
import BooksListItem from "./BooksListItem";

const initialBooks = [
  {
    id: 1,
    title: "JavaScript-The Comprehensive Guide",
    author: "Philip Ackermann",
    isbn: "978-3836286299",
    rating: 5,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Reobert Martin",
    isbn: "978-0132350884",
    rating: 4,
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Erich Gamma",
    isbn: "978-0201633610",
    rating: 5,
  },
];

const BookList = () => {
  const [books, setBooks] = useState(initialBooks);

  const handleRate = (id, rating) => {
    setBooks((prevState) => {
      return prevState.map((book) => {
        if (book.id === id) {
          book.rating = rating;
        }
        return book;
      });
    });
  };

  if (books.length === 0) {
    return <div>No books found</div>;
  } else {
    return (
      <table>
        <thead>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Rating</th>
        </thead>
        <tbody>
          {books.map((book) => (
            <BooksListItem key={book.id} book={book} onRate={handleRate} />
          ))}
        </tbody>
      </table>
    );
  }
};

export default BookList;