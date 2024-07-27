import { useEffect, useMemo, useReducer } from "react";
import "./BookList.css";
import BooksListItem from "./BooksListItem";
import middleware from "./booksListMiddleware";
import reducer from "./booksListReducer";

const BooksList = () => {
  const [books, dispatch] = useReducer(reducer, []);

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);

  useEffect(() => {
    middlewareDispatch({ type: "FETCH" });
  }, [middlewareDispatch]);

  const handleRate = (book, rating) => {
    middlewareDispatch({
      type: "RATE",
      payload: { ...book, rating },
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

export default BooksList;
