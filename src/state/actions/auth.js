import axios from "axios";
import {axiosWithAuth} from '../../utils/axios';
import * as types from "../types";

export const login = () => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_START });
  window.location = "http://localhost:5000/login";
};

export const authenticate = (token ) => (dispatch) => {
  dispatch({ type: types.USER_AUTHENTICATE, payload: token });
};

export const getUserInfo = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_INFO});

  try {
    const userInfo = await axiosWithAuth().get(`https://api.spotify.com/v1/me`);
    console.log(userInfo)
    dispatch({ type: types.GET_USER_INFO_SUCCESS, payload: userInfo});
  }
  catch(err) {
    dispatch({ type: types.GET_USER_INFO_FAILURE, payload: err})
  }
};

// export const sendUserInfo = () => async (dispatch) => {
//   dispatch({ type: types.SEND_USER_INFO});

//   try {

//   }
//   catch(err) {

//   }

// }