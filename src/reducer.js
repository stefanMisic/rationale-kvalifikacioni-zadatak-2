import { combineReducers } from 'redux';
import { reducer as home } from './features/home';

const reducers = {
  home
}

const appReducer = combineReducers(reducers);

export default appReducer;
