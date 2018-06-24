import React from 'react';
import { Route, Switch } from 'react-router';
import NewsContainer from '../components/NewsContainer';
import TeamContainer from '../components/TeamContainer';

const Home = () =>
  <div>
    <h1>Home</h1>
  </div>;

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/news" component={NewsContainer} />
    <Route path="/team" component={TeamContainer} />
    {/* <Route component={NoMatch} /> */}
  </Switch>
);

export default routes;
