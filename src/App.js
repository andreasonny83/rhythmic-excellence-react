import React from 'react';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import { Topbar } from './components/Topbar';

const AppContainer = ({ routes, router }) => {
  const topBar = router.location.pathname !== '/' ? <Topbar /> : '';

  return (
    <div className="App">
      <Navbar />
      {topBar}
      {routes}
    </div>
  );
};

const mapStateToProps = ({ router }) => ({ router });

export const App = connect(mapStateToProps)(AppContainer);
