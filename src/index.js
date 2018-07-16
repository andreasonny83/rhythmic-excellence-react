import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import routes from './routes';

import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Render to DOM
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App routes={routes} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
