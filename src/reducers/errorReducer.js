import { ERROR_REDUCER } from "../actions/types";

const intialState = {};

export default (state = intialState, action) => {
  switch (action.type) {
    case ERROR_REDUCER:
      return action.payload;

    default:
      return state;
  }
};
