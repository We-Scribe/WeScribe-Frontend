import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/cis-hackathon/' component={Home} />
      <Route exact path='/cis-hackathon/main' component={Main} />
    </Switch>
  </div>
);

export default BaseRouter;
