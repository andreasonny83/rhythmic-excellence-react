import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const initialState = {
  burgerMenu: {
    isOpen: false
  }
};

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const enhancers = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunk)
);

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  enhancers
);
