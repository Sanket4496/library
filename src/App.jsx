import { useState } from "react";
import "./App.css";
import Context from "./Context";
import Counter from "./Counter";
// import BooksList from "./BooksList";
// import BooksLoader from "./BooksLoader";
// import BooksListContainer from "./BooksList.container";
// import withBooks from "./withBooks";

// const BooksListWithBooks = withBooks(BooksList);

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <BooksLoader>
//         {(books, error, handleRate) => (
//           <BooksList books={books} error={error} handleRate={handleRate} />
//         )}
//       </BooksLoader>
//     </div>
//   );
// }

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevState) => prevState + 1);

  return (
    <Context.Provider value={counter}>
      <Counter />
      <button onClick={increment}>increment</button>
    </Context.Provider>
  );
}

export default App;
