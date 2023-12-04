import { useEffect, useState } from "react";
import { produce } from "immer";
import client from "./client";

const withBooks = (Component) => {
  return (props) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await client.get(
            `${process.env.REACT_APP_API_SERVER}/books`
          );
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

    return (
      <Component
        {...props}
        books={books}
        error={error}
        handleRate={handleRate}
      />
    );
  };
};

export default withBooks;
