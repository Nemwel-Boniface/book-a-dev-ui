import * as API from '../data';

const actionTypes = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT_SUCCESS: 'USER_LOGOUT_SUCCESS',
  USER_LOGOUT_FAILURE: 'USER_LOGOUT_FAILURE',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
};

export const login = (userData, location) => (dispatch) => {
  API.login(userData)
    .then((response) => {
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: response.data.data,
      });

      localStorage.setItem('user', JSON.stringify(response.data.data));
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
  API.signup(userData)
    .then((res) => {
      dispatch({
        type: actionTypes.USER_REGISTER_SUCCESS,
        payload: res.data,
      });

      localStorage.setItem('user', JSON.stringify(res.data));
      location('/developers');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.USER_REGISTER_FAILURE,
        payload: error,
      });
    });
};

export const logout = (navigate) => (dispatch) => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
      type: actionTypes.USER_LOGOUT_SUCCESS,
    });
    navigate('/');
  } else {
    dispatch({
      type: actionTypes.USER_LOGOUT_FAILURE,
    });
  }
};
