import {
  SET_CURRENT_USER,
  SET_REMEMBER,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_UPDATED_USER,
  GET_CURRENT_USER
} from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  rememberMe: false,
  modalOpen: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case SET_REMEMBER:
      return {
        ...state,
        rememberMe: action.payload
      };

    case SET_UPDATED_USER:
      return {
        ...state,
        user: action.payload
      };

    case SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: true
      };

    case SET_MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false
      };

    case GET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
