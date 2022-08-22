import * as API from '../data';

const actionTypes = {
  DEVELOPERS_FETCH_SUCCESS: 'DEVELOPERS_FETCH_SUCCESS',
  DEVELOPERS_FETCH_FAILURE: 'DEVELOPERS_FETCH_FAILURE',
  DEVELOPER_FETCH_SUCCESS: 'DEVELOPER_FETCH_SUCCESS',
  DEVELOPER_FETCH_FAILURE: 'DEVELOPER_FETCH_FAILURE',
  DEVELOPER_CREATE_SUCCESS: 'DEVELOPER_CREATE_SUCCESS',
  DEVELOPER_CREATE_FAILURE: 'DEVELOPER_CREATE_FAILURE',
  DEVELOPER_UPDATE_SUCCESS: 'DEVELOPER_UPDATE_SUCCESS',
  DEVELOPER_UPDATE_FAILURE: 'DEVELOPER_UPDATE_FAILURE',
  DEVELOPER_DELETE_SUCCESS: 'DEVELOPER_DELETE_SUCCESS',
  DEVELOPER_DELETE_FAILURE: 'DEVELOPER_DELETE_FAILURE',
  RESERVE_CREATE_SUCCESS: 'RESERVE_CREATE_SUCCESS',
  RESERVE_CREATE_FAILURE: 'RESERVE_CREATE_FAILURE',
};

export const newDev = (developer) => async (dispatch) => {
  await API.createdeveloper(developer)
    .then((developer) => {
      dispatch({
        type: actionTypes.DEVELOPER_CREATE_SUCCESS,
        payload: developer.data,
      });
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
      navigate('/developers');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.DEVELOPER_DELETE_FAILURE,
        payload: error,
      });
    });
};

export const reserveDeveloper = (reserve, navigate) => async (dispatch) => {
  await API.newReservation(reserve)
    .then((reserve) => {
      dispatch({
        type: actionTypes.RESERVE_CREATE_SUCCESS,
        payload: reserve,
      });
      navigate('/reservations');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVE_CREATE_FAILURE,
        payload: error,
      });
    });
};
