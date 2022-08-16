import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import developerReducer from './reducers/developer';
import userReducer from './reducers/user';
import reservationReducer from './reducers/reservation';

const rootReducer = combineReducers({
  user: userReducer,
  developer: developerReducer,
  reservation: reservationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
