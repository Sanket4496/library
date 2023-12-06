import { Star, StarBorder } from "@mui/icons-material";
import { useEffect, useMemo, useReducer } from "react";
import "./BookList.css";
import middleware from "./booksListMiddleware";
import reducer from "./booksListReducer";

const BooksList = () => {
  const [books, dispatch] = useReducer(reducer, []);

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);

  useEffect(() => {
    middlewareDispatch({ type: "FETCH" });
  }, [middlewareDispatch]);

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
                      middlewareDispatch({
                        type: "RATE",
                        payload: { ...book, rating: i + 1 },
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
