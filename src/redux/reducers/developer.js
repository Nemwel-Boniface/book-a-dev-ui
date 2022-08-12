const actionTypes = {
  DEVELOPERS_FETCH_SUCCESS: 'DEVELOPERS_FETCH_SUCCESS',
  DEVELOPERS_FETCH_FAILURE: 'DEVELOPERS_FETCH_FAILURE',
  DEVELOPER_FETCH_SUCCESS: 'DEVELOPER_FETCH_SUCCESS',
  DEVELOPER_FETCH_FAILURE: 'DEVELOPER_FETCH_FAILURE',
};

const initialState = {
  developers: [],
  developer: {},
  loading: false,
  error: null,
};

const developerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEVELOPERS_FETCH_SUCCESS:
      return {
        ...state,
        developers: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPERS_FETCH_FAILURE:
      return {
        ...state,
        developers: [],
        loading: false,
        error: action.payload,
      };
    case actionTypes.DEVELOPER_FETCH_SUCCESS:
      return {
        ...state,
        DEVELOPER: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPER_FETCH_FAILURE:
      return {
        ...state,
        DEVELOPER: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default developerReducer;
