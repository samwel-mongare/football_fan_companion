import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import leagueReducer from './Homepage/League';
import leagueDetailsReducer from './Details/Details';

const reducer = combineReducers({
  league: leagueReducer,
  details: leagueDetailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
