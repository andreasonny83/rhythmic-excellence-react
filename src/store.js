import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const initialState = {};

export const history = createBrowserHistory();

const enhancers = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
  ));

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  enhancers,
);
