import * as API from '../data';

const actionTypes = {
  DEVELOPERS_FETCH_SUCCESS: 'DEVELOPERS_FETCH_SUCCESS',
  DEVELOPERS_FETCH_FAILURE: 'DEVELOPERS_FETCH_FAILURE',
  DEVELOPER_FETCH_SUCCESS: 'DEVELOPER_FETCH_SUCCESS',
  DEVELOPER_FETCH_FAILURE: 'DEVELOPER_FETCH_FAILURE',
};

export const fetchDevelopers = (dispatch) => {
  API.fetchDevelopers()
    .then((developers) => {
      dispatch({
        type: actionTypes.DEVELOPERS_FETCH_SUCCESS,
        payload: developers,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPERS_FETCH_FAILURE,
        payload: error,
      });
    });
};
export const fetchDeveloper = (dispatch) => {
  API.getDeveloper()
    .then((developer) => {
      dispatch({
        type: actionTypes.DEVELOPER_FETCH_SUCCESS,
        payload: developer,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPER_FETCH_FAILURE,
        payload: error,
      });
    });
};
