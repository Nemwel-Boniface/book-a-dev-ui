const actionTypes = {
  RESERVATIONS_FETCH_SUCCESS: 'RESERVATIONS_FETCH_SUCCESS',
  RESERVATIONS_FETCH_FAILURE: 'RESERVATIONS_FETCH_FAILURE',
  RESERVATION_FETCH_SUCCESS: 'RESERVATION_FETCH_SUCCESS',
  RESERVATION_FETCH_FAILURE: 'RESERVATION_FETCH_FAILURE',
  RESERVATION_CREATE_SUCCESS: 'RESERVATION_CREATE_SUCCESS',
  RESERVATION_CREATE_FAILURE: 'RESERVATION_CREATE_FAILURE',
};

const initialState = {
  reservations: [],
  reservation: {},
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESERVATIONS_FETCH_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
        error: null,
      };
    case actionTypes.RESERVATIONS_FETCH_FAILURE:
      return {
        ...state,
        reservations: [],
        error: action.payload,
      };

    case actionTypes.RESERVATION_CREATE_SUCCESS:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
        error: null,
      };
    case actionTypes.RESERVATION_CREATE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
