import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'reducers';
import apiMiddleware from '../middlewares/api';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, apiMiddleware))
);
export default store;
