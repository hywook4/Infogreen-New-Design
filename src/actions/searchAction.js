import { SET_SEARCH_CONTENT } from "./types";

export const searchAction = searchData => dispatch => {
  dispatch({
    type: SET_SEARCH_CONTENT,
    payload: searchData
  });
};
