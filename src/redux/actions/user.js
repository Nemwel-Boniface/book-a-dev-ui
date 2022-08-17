import * as API from '../data';

const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

export const login = (userData, location) => (dispatch) => {
  dispatch({
    type: actionTypes.USER_LOGIN_REQUEST,
  });
  API.login(userData)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: response.data,
      });

      const result = response.headers.authorization;
      localStorage.setItem('token', result.split(' ')[1]);
      localStorage.setItem('user', JSON.stringify(response.data));

      location('/developers');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_LOGIN_FAILURE,
        payload: error,
      });
    });
};

export const signup = (userData, location) => (dispatch) => {
  dispatch({
    type: actionTypes.USER_REGISTER_REQUEST,
  });
  API.signup(userData)
    .then((user) => {
      dispatch({
        type: actionTypes.USER_REGISTER_SUCCESS,
        payload: user,
      });
      location('/login');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_REGISTER_FAILURE,
        payload: error,
      });
    });
};

export const logout = (navigate) => (dispatch) => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: actionTypes.USER_LOGOUT_SUCCESS,
    });
    navigate('/developers');
  } else {
    dispatch({
      type: actionTypes.USER_LOGOUT_FAILURE,
    });
  }
};
