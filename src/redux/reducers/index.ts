import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer';
import errorReducer from './error.reducer';

const reducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
});

export default reducers;
