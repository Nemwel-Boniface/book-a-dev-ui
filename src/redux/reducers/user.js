const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

const user = localStorage.getItem('user');
const initialState = user
  ? {
    isLoggedIn: true,
    user,
    errorLogin: null,
    errorSignup: null,
    loadingLogin: false,
    loadingSignup: false,
  }
  : {
    isLoggedIn: false,
    user: null,
    errorLogin: null,
    error_sign_up: null,
    loadingLogin: false,
    loadingSignup: false,
  };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loadingLogin: false,
        loadingSignup: false,
        errorLogin: null,
        errorSignup: null,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        errorLogin: action.payload,
        errorSignup: null,
        loadingLogin: false,
        loadingSignup: false,
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loadingLogin: false,
        loadingSignup: false,
        errorLogin: null,
        errorSignup: null,
      };
    case actionTypes.USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        errorLogin: null,
        errorSignup: null,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loadingLogin: false,
        loadingSignup: false,
        errorLogin: null,
        errorSignup: null,
      };
    case actionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loadingLogin: false,
        loadingSignup: true,
        errorLogin: null,
        errorSignup: null,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loadingLogin: false,
        loadingSignup: false,
        errorLogin: false,
        errorSignup: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
