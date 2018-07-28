import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import NewsContainer from './components/NewsContainer';
import TeamContainer from './components/TeamContainer';

export const routes = (
  <Switch>
    <Route exact path="/app" component={Home} />
    <Route path="/app/news" component={NewsContainer} />
    <Route path="/app/team" component={TeamContainer} />
    <Route component={NotFound} />
  </Switch>
);
