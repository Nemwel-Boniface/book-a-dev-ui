const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

const user = JSON.parse(localStorage.getItem('user'));

// fill state with user data if logged in
const initialState = user
  ? {
    isLoggedIn: true,
    user,
    error: null,
  }
  : {
    isLoggedIn: false,
    user: null,
    error: null,
  };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.USER_LOGOUT_FAILURE:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
