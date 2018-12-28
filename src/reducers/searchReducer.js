import { SET_SEARCH_CONTENT } from "../actions/types";

const initialState = "";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_CONTENT:
      return action.payload || "";

    default:
      return state;
  }
};

export default searchReducer;
