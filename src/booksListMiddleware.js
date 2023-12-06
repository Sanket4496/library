import client from "./client";

const booksListMiddleware = (dispatch) => {
  return async (action) => {
    switch (action.type) {
      case "FETCH":
        const { data: books } = await client.get("/books");
        dispatch({ type: "LOAD_SUCCESS", payload: books });
        break;
      case "RATE":
        await client.put(`/books/${action.payload.id}`, action.payload);
        dispatch({
          type: "RATE_SUCCESS",
          payload: { id: action.payload.id, rating: action.payload.rating },
        });
        break;
      default:
    }
  };
};

export default booksListMiddleware;
