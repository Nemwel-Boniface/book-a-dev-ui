const actionTypes = {
  RESERVATIONS_FETCH_SUCCESS: 'RESERVATIONS_FETCH_SUCCESS',
  RESERVATIONS_FETCH_REQUEST: 'RESERVATIONS_FETCH_REQUEST',
  RESERVATIONS_FETCH_FAILURE: 'RESERVATIONS_FETCH_FAILURE',
  RESERVATION_FETCH_SUCCESS: 'RESERVATION_FETCH_SUCCESS',
  RESERVATION_FETCH_FAILURE: 'RESERVATION_FETCH_FAILURE',
  RESERVATION_CREATE_SUCCESS: 'RESERVATION_CREATE_SUCCESS',
  RESERVATION_CREATE_FAILURE: 'RESERVATION_CREATE_FAILURE',
  RESERVATION_DELETE_SUCCESS: 'RESERVATION_DELETE_SUCCESS',
  RESERVATION_DELETE_FAILURE: 'RESERVATION_DELETE_FAILURE',
};

const initialState = {
  reservations: [],
  reservation: {},
  loading: false,
  error: null,
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESERVATIONS_FETCH_SUCCESS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.RESERVATIONS_FETCH_REQUEST:
      return {
        ...state,
        reservations: [],
        loading: true,
        error: null,
      };
    case actionTypes.RESERVATIONS_FETCH_FAILURE:
      return {
        ...state,
        reservations: [],
        loading: false,
        error: action.payload,
      };

    case actionTypes.RESERVATION_CREATE_SUCCESS:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.RESERVATION_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.RESERVATION_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case actionTypes.RESERVATION_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
