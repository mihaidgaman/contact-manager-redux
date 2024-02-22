import { combineReducers, createStore } from 'redux';
import { counterReducer } from './reducers';

const mainReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(mainReducer);

export default store;
