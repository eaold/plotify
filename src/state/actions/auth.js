import axios from "axios";
import * as types from "../types";

export const login = () => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_START });
  window.location = "http://localhost:5000/login";
};

export const authenticate = (token ) => (dispatch) => {
  dispatch({ type: types.USER_AUTHENTICATE, payload: token });
};
