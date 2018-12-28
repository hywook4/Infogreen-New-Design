import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import errorReducer from "./errorReducer";
import searchReducer from "./searchReducer";
import itemsReducer from "./itemsReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  search: searchReducer,
  items: itemsReducer,
  loading: loadingReducer
});
