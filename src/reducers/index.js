import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from 'reducers/counter';
import todo from 'reducers/todo';

const rootReducer = combineReducers({
  counter,
  todo,
  routing,
});

export default rootReducer;
