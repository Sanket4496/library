import "./App.css";
import BooksProvider from "./BooksProvider";
import BooksList from "./BooksList";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <BooksProvider>
        <BooksList />
      </BooksProvider>
    </div>
  );
}
export default App;
