import { useContext, useEffect } from "react";
import "./BookList.css";
import BooksListItem from "./BooksListItem";
import BooksContext from "./BooksContext";
import client from "./client";

const BooksList = () => {
  const [books, setBooks] = useContext(BooksContext);

  useEffect(() => {
    (async () => {
      const { data } = await client.get(
        `${process.env.REACT_APP_API_SERVER}/books`
      );
      setBooks(data);
    })();
  }, []);

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
            <BooksListItem key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    );
  }
};

export default BooksList;
