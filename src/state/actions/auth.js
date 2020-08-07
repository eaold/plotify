import axios from "axios";
import { axiosWithAuth } from "../../utils/axios";
import * as types from "../types";

export const login = () => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_START });
  window.location = "http://localhost:5000/login";
};

export const authenticate = (token) => (dispatch) => {
  dispatch({ type: types.USER_AUTHENTICATE, payload: token });
};



export const sendUserInfo = ( user ) => async (dispatch) => {
  dispatch({ type: types.SEND_USER_INFO });
  console.log(user)
  try {
    const updatedUser = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users`,
      user
    );
    dispatch({ type: types.SEND_USER_INFO_SUCCESS, payload: updatedUser });
  } catch (err) {
    dispatch({ type: types.SEND_USER_INFO_FAILURE, payload: err });
  }
};

export const getUserInfo = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_INFO });

  try {
    const userInfo = await axiosWithAuth().get(`https://api.spotify.com/v1/me`);

    console.log(userInfo);
    console.log(userInfo.data);
    dispatch({ type: types.GET_USER_INFO_SUCCESS, payload: userInfo });
  } catch (err) {
    dispatch({ type: types.GET_USER_INFO_FAILURE, payload: err });
  }
};