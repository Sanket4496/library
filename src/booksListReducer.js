import { produce } from "immer";

const booksListReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_SUCCESS":
      return action.payload;
    case "RATE_SUCCESS":
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          (book) => book.id === action.payload.id
        );
        draftState[index].rating = action.payload.rating;
      });
    default:
      return state;
  }
};

export default booksListReducer;
