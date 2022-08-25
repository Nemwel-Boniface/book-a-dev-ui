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

const initialState = {
  developers: [],
  developer: {},
  error: null,
};

const developerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEVELOPERS_FETCH_SUCCESS:
      return {
        ...state,
        developers: action.payload,
        error: null,
      };
    case actionTypes.DEVELOPERS_FETCH_FAILURE:
      return {
        ...state,
        developers: [],
        error: action.payload,
      };
    case actionTypes.DEVELOPER_FETCH_SUCCESS:
      return {
        ...state,
        developer: action.payload,
        error: null,
      };
    case actionTypes.DEVELOPER_FETCH_FAILURE:
      return {
        ...state,
        developer: {},
        error: action.payload,
      };
    case actionTypes.DEVELOPER_CREATE_SUCCESS:
      return {
        ...state,
        developers: [...state.developers, action.payload],
        error: null,
      };
    case actionTypes.DEVELOPER_CREATE_FAILURE:
      return {
        ...state,
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
        developers: state.developers.filter(
          (developer) => String(developer.id) !== action.payload,
        ),
        loading: false,
        error: null,
      };
    case actionTypes.DEVELOPER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default developerReducer;
