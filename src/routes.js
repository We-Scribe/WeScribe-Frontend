import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/cis-hackathon/' component={Home} />
      <Route exact path='/cis-hackathon/register' component={Register} />
      <Route exact path='/cis-hackathon/login' component={Login} />
      <Route path='/cis-hackathon/main' component={Main} />
    </Switch>
  </div>
);

export default BaseRouter;
