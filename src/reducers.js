import { combineReducers } from 'redux';
import counter from './containers/Counter/reducer';
import todo from './containers/Todo/reducer';

const rootReducer = combineReducers({
  counter,
  todo,
});

export default rootReducer;
