import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import leagueReducer from './Homepage/League';
import leagueDetailsReducer from './Details/Details';

const reducer = combineReducers({
  league: leagueReducer,
  details: leagueDetailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
