import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";

const BooksListItem = ({ book, onRate }) => {
  const handleRate = (e) => {
    const rating = e.target.closest("[data-value]")?.dataset.value;
    if (rating) {
      onRate(book.id, parseInt(rating, 10));
    }
  };
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

BooksListItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onRate: PropTypes.func.isRequired,
};

export default BooksListItem;
