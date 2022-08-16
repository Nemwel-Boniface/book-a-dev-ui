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
    case actionTypes.DEVELOPER_CREATE_SUCCESS:
      return {
        ...state,
        developers: [...state.developers, action.payload],
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPER_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.DEVELOPER_UPDATE_SUCCESS:
      return {
        ...state,
        developers: state.developers.map((developer) => {
          if (developer.id === action.payload.id) {
            return action.payload;
          }
          return developer;
        }),
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.DEVELOPER_DELETE_SUCCESS:
      return {
        ...state,
        developers: state.developers.filter((developer) => developer.id !== action.payload),
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.RESERVE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.RESERVE_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default developerReducer;
