import React, { useContext } from "react";
import { produce } from "immer";
import BooksContext from "./BooksContext";
import { Star, StarBorder } from "@mui/icons-material";
import "./Rating.css";

const BooksListItem = ({ book }) => {
  const [, setBooks] = useContext(BooksContext);

  const handleRate = (id, rating) => {
    setBooks((prevState) => {
      return produce(prevState, (draftState) => {
        const index = draftState.findIndex((book) => book.id === id);
        draftState[index].rating = rating;
      });
    });
  };
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : "Unknown"}</td>
      <td>{book.isbn}</td>
      <td>
        {new Array(5).fill("").map((item, i) => (
          <button
            className="ratingButton"
            key={i}
            onClick={() => handleRate(book.id, i + 1)}
          >
            {book.rating < i + 1 ? <StarBorder /> : <Star />}
          </button>
        ))}
      </td>
    </tr>
  );
};

export default BooksListItem;
