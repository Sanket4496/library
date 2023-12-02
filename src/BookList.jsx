import React, { useEffect, useState } from "react";
import "./BookList.css";
import { produce } from "immer";
import BooksListItem from "./BooksListItem";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        if (!response.ok) {
          throw new Error("Request Failed");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  const handleRate = (id, rating) => {
    setBooks((prevState) => {
      return produce(prevState, (draftState) => {
        const index = draftState.findIndex((book) => book.id === id);
        draftState[index].rating = rating;
      });
    });
  };

  if (error !== null) {
    return <div>An error has occured: {error.message}</div>;
  } else if (books.length === 0) {
    return <div>No books found</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Rating</th>
          </tr>
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
