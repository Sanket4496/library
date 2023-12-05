import "./App.css";
import BooksList from "./BooksList";
import BooksLoader from "./BooksLoader";
// import BooksListContainer from "./BooksList.container";
// import withBooks from "./withBooks";

// const BooksListWithBooks = withBooks(BooksList);

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <BooksLoader>
        {(books, error, handleRate) => (
          <BooksList books={books} error={error} handleRate={handleRate} />
        )}
      </BooksLoader>
    </div>
  );
}

export default App;
