import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { counterReducer, authReducer } from './reducers';
import { thunk } from 'redux-thunk';

const mainReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

// recipe:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
