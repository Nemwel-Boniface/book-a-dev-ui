import * as API from '../data';

const actionTypes = {
  RESERVATIONS_FETCH_SUCCESS: 'RESERVATIONS_FETCH_SUCCESS',
  RESERVATIONS_FETCH_FAILURE: 'RESERVATIONS_FETCH_FAILURE',
  RESERVATION_FETCH_SUCCESS: 'RESERVATION_FETCH_SUCCESS',
  RESERVATION_FETCH_FAILURE: 'RESERVATION_FETCH_FAILURE',
  RESERVATION_CREATE_SUCCESS: 'RESERVATION_CREATE_SUCCESS',
  RESERVATION_CREATE_FAILURE: 'RESERVATION_CREATE_FAILURE',
};

export const createReservation = (reservation, navigate) => (dispatch) => {
  API.newReservation(reservation)
    .then((reservation) => {
      dispatch({
        type: actionTypes.RESERVATION_CREATE_SUCCESS,
        payload: reservation.data,
      });
      navigate('/reservations');
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATION_CREATE_FAILURE,
        payload: error,
      });
    });
};

export const fetchReservations = (dispatch) => {
  API.fetchReservations()
    .then((reservations) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_SUCCESS,
        payload: reservations.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESERVATIONS_FETCH_FAILURE,
        payload: error,
      });
    });
};
