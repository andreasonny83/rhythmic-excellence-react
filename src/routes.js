import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home';
import NewsContainer from './components/NewsContainer';
import TeamContainer from './components/TeamContainer';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={NewsContainer} />
    <Route path="/team" component={TeamContainer} />
    {/* <Route component={NoMatch404} /> */}
  </Switch>
);

export default routes;
