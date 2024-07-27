import React, { useCallback } from "react";
import Rating from "./Rating";
import "./Rating.css";

const BooksListItem = ({ book, onRate }) => {
  const handleRate = useCallback(
    (event) => {
      const rating = event.target.closest("[data-value]")?.dataset.value;
      if (rating) {
        onRate(book, parseInt(rating, 10));
      }
    },
    [book, onRate]
  );
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : "Unknown"}</td>
      <td>{book.isbn}</td>
      <td onClick={handleRate}>
        <Rating item={book} />
      </td>
    </tr>
  );
};

export default BooksListItem;
