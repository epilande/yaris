import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './containers/Counter/reducer';
import todo from './containers/Todo/reducer';

const rootReducer = combineReducers({
  counter,
  todo,
  routing,
});

export default rootReducer;
