import { Star, StarBorder } from "@mui/icons-material";
import { produce } from "immer";
import { useReducer } from "react";
import "./BookList.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "RATE":
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          (book) => book.id === action.payload.id
        );
        draftState[index].rating = action.payload.rating;
      });
    default:
      return state;
  }
};

const initialBooks = [
  {
    id: 1,
    title: "JavaScript - The Comprehensive Guide",
    author: "Philip Ackermann",
    isbn: "978-3836286299",
    rating: 5,
  },
];

const BooksList = () => {
  const [books, dispatch] = useReducer(reducer, initialBooks);

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
            <tr>
              <td>{book.title}</td>
              <td>{book.author ? book.author : "Unknown"}</td>
              <td>{book.isbn}</td>
              <td>
                {new Array(5).fill("").map((item, i) => (
                  <button
                    className="ratingButton"
                    key={i}
                    onClick={() =>
                      dispatch({
                        type: "RATE",
                        payload: { id: book.id, rating: i + 1 },
                      })
                    }
                  >
                    {book.rating < i + 1 ? <StarBorder /> : <Star />}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default BooksList;
