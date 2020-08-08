import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: localStorage.getItem('token') || "",
  display_name: "",
  email: "",
  href: "",
  image: '',
  error: "",
  id: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_START:
    case types.SEND_USER_INFO:
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
        image: action.payload.data.images[0],
      };
    case types.SEND_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: action.payload.data._id
      };
      case types.REMOVE_TOKEN:
        return {
          ...state,
          token: ''
        }
    case types.USER_LOGIN_FAILURE:
    case types.GET_USER_INFO_FAILURE:
    case types.SEND_USER_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
