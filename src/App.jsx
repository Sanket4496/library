import "./App.css";
import BooksList from "./BooksList";
import BooksListContainer from "./BooksList.container";
import withBooks from "./withBooks";

const BooksListWithBooks = withBooks(BooksList);

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <BooksListWithBooks />
    </div>
  );
}

export default App;
