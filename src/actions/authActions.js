import {
  SET_CURRENT_USER,
  ERROR_REDUCER,
  SET_REMEMBER,
  SET_MODAL_OPEN,
  SET_MODAL_CLOSE,
  SET_UPDATED_USER,
  GET_CURRENT_USER
} from "./types";
import decodeToken from "jwt-decode";
import axios from "axios";
import addToHeader from "../utils/addToHeader";
import swal from "sweetalert";

export const loginAction = userData => dispatch => {
  axios
    .post("/api/auth/login", userData)
    .then(res => {
      const { token } = res.data;

      swal({
        title: "You have successfully logged in",
        icon: "success",
        button: {
          visible: false
        },
        className: "p-5",
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
      });

      //set remember me
      dispatch(setRemember(userData.remember));

      //set on localstorage
      localStorage.setItem("jwtToken", token);

      //add to Header
      addToHeader(token);

      //decode token
      const decode = decodeToken(token);

      //set current user
      dispatch(setUser(decode));
    })
    .catch(error => {
      return dispatch({
        type: ERROR_REDUCER,
        payload: error.response.data
      });
    });
};

export const getUpdatedUser = () => dispatch => {
  axios
    .get("/api/auth/current")
    .then(profile => {
      console.log(profile.data);
      dispatch({
        type: SET_UPDATED_USER,
        payload: profile.data
      });
    })
    .catch(error => {
      return dispatch({
        type: ERROR_REDUCER,
        payload: error
      });
    });
};

export function setUser(decode) {
  return {
    type: SET_CURRENT_USER,
    payload: decode
  };
}

export const logoutUser = funcToInvoke => dispatch => {
  localStorage.setItem("path", "/");
  axios.get("/api/auth/logOut").then(res => {
    console.log("logged out");
    if (funcToInvoke) {
      window.location.href = funcToInvoke;
    }
  });
  localStorage.removeItem("jwtToken");
  addToHeader(false);
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

export const setRemember = value => {
  return {
    type: SET_REMEMBER,
    payload: value
  };
};

export const registerUser = userData => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => {
      swal({
        title: "Welcome to infogreen",
        icon: "success",
        button: {
          visible: false
        },
        className: "p-5",
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
      });
      console.log(res.data);
      const { token } = res.data;

      // set on localstorage
      localStorage.setItem("jwtToken", token);

      //add to Header
      addToHeader(token);

      //decode token
      const decode = decodeToken(token);

      axios
        .post("/api/auth/getUserByEmail", { email: res.data.user.email })
        .then(user => {
          //set current user
          dispatch(setUser(user.data));
        });
    })
    .catch(error => {
      console.log(error.response.data);
      return dispatch({
        type: ERROR_REDUCER,
        payload: error.response.data
      });
    });
};

export const openModalAction = () => dispatch => {
  return dispatch({
    type: SET_MODAL_OPEN
  });
};

export const closeModalAction = () => dispatch => {
  return dispatch({
    type: SET_MODAL_CLOSE
  });
};

//get current user
export const getCurrentUser = () => dispatch => {
  axios.get("/api/auth/getUser").then(result => {
    dispatch({
      type: GET_CURRENT_USER,
      payload: result.data
    });
  });
};

// Action for deleting user
export const deleteUser = () => dispatch => {
  axios.get("/api/auth/deleteUser").then(result => {
    if (result.data.user.n === 1) {
      localStorage.removeItem("jwtToken");
      window.location.href = "/";
    }
  });
};
