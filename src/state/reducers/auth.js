import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: "",
  display_name: "",
  email: "",
  href: "",
  image: "",
  error: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case types.USER_AUTHENTICATE:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        isLoggedIn: true,
      };
    case types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        email: action.payload.data.email,
        display_name: action.payload.data.display_name,
        href: action.payload.data.href,
        image: action.payload.data.images,
      };
    case types.USER_LOGIN_FAILURE:
    case types.GET_USER_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
