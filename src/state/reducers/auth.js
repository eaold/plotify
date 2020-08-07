import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: "",
  display_name:'',
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
              isLoggedIn: true
          }
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


