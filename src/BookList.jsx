import React, { useEffect, useState } from "react";
import "./BookList.css";
import { produce } from "immer";
import BooksListItem from "./BooksListItem";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: "JavaScript-The Comprehensive Guide",
          author: "Philip Ackermann",
          isbn: "978-3836286299",
          rating: 5,
        },
      ]);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("Elements in the state: ", books.length);
    console.log("Table rows: ", document.querySelectorAll("tbody tr").length);
  });

  const handleRate = (id, rating) => {
    setBooks((prevState) => {
      return produce(prevState, (draftState) => {
        const index = draftState.findIndex((book) => book.id === id);
        draftState[index].rating = rating;
      });
    });
  };

  if (books.length === 0) {
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
