import React, { useState } from "react";
import BooksContext from "./BooksContext";

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
