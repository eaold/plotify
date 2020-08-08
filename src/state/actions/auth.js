import axios from "axios";
import queryString from 'query-string'
import { axiosWithAuth, Axios } from "../../utils/axios";
import * as types from "../types";


export const login = () => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_START });
const query = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  response_type: 'token',
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  scope: 'user-read-private user-read-email playlist-read-private user-library-read user-top-read user-read-recently-played'
}

  try {
    window.location=
    `https://accounts.spotify.com/authorize?${queryString.stringify(query)}`;
    
    dispatch({ type: types.USER_LOGIN_SUCCESS });
  } catch (err) {
    dispatch({ type: types.USER_LOGIN_FAILURE });
  }
};

export const authenticate = (token) => (dispatch) => {
  dispatch({ type: types.USER_AUTHENTICATE, payload: token });
};

export const sendUserInfo = (user) => async (dispatch) => {
  dispatch({ type: types.SEND_USER_INFO });
  console.log(user);
  try {
    const updatedUser = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users`,
      user
    );
    dispatch({ type: types.SEND_USER_INFO_SUCCESS, payload: updatedUser });
  } catch (err) {
    dispatch({ type: types.SEND_USER_INFO_FAILURE, payload: err.response });
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
    dispatch({ type: types.GET_USER_INFO_FAILURE, payload: err.response });
  }
};

export const removeToken = () => (dispatch) => {
  const stored_token = localStorage.getItem('token');
  console.log('removing token')

  if (stored_token) {
    localStorage.removeItem('token');
    dispatch({ type: types.REMOVE_TOKEN})
  }

}