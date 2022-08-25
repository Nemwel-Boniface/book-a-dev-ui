import * as API from '../data';

const actionTypes = {
  DEVELOPERS_FETCH_SUCCESS: 'DEVELOPERS_FETCH_SUCCESS',
  DEVELOPERS_FETCH_FAILURE: 'DEVELOPERS_FETCH_FAILURE',
  DEVELOPER_FETCH_SUCCESS: 'DEVELOPER_FETCH_SUCCESS',
  DEVELOPER_FETCH_FAILURE: 'DEVELOPER_FETCH_FAILURE',
  DEVELOPER_CREATE_SUCCESS: 'DEVELOPER_CREATE_SUCCESS',
  DEVELOPER_CREATE_FAILURE: 'DEVELOPER_CREATE_FAILURE',
  DEVELOPER_DELETE_SUCCESS: 'DEVELOPER_DELETE_SUCCESS',
  DEVELOPER_DELETE_FAILURE: 'DEVELOPER_DELETE_FAILURE',
};

export const newDev = (developer, navigate) => async (dispatch) => {
  await API.createdeveloper(developer)
    .then((developer) => {
      dispatch({
        type: actionTypes.DEVELOPER_CREATE_SUCCESS,
        payload: developer.data,
      });
      navigate('/developers');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPER_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const fetchDevelopers = async (dispatch) => {
  await API.fetchDevelopers()
    .then((developers) => {
      dispatch({
        type: actionTypes.DEVELOPERS_FETCH_SUCCESS,
        payload: developers.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPERS_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const fetchDeveloper = (id) => async (dispatch) => {
  await API.getDeveloper(id)
    .then((developer) => {
      dispatch({
        type: actionTypes.DEVELOPER_FETCH_SUCCESS,
        payload: developer.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPER_FETCH_FAILURE,
        payload: error,
      });
    });
};

export const deleteDeveloper = (id, navigate) => async (dispatch) => {
  await API.deleteDeveloper(id)
    .then(() => {
      dispatch({
        type: actionTypes.DEVELOPER_DELETE_SUCCESS,
        payload: id,
      });
      navigate('/developers', { replace: true });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPER_DELETE_FAILURE,
        payload: error,
      });
    });
};
