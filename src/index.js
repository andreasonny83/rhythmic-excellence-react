import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import { routes } from './routes';

import { App } from './App';
import registerServiceWorker, { unregister } from './registerServiceWorker';
import './index.css';
import data from './data.json';

// Render to DOM
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App routes={routes} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL);
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0];

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister();
}
