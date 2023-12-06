const { createContext } = require("react");

const BooksContext = createContext([null, () => {}]);

export default BooksContext;
