import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import RegisterForm from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Notes from './components/Notes';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/cis-hackathon/' component={Home} />
      <Route exact path='/cis-hackathon/register' component={RegisterForm} />
      <Route exact path='/cis-hackathon/login' component={Login} />
      <Route path='/cis-hackathon/main' component={Main} />
      <Route path='/cis-hackathon/notes' component={Notes} />
    </Switch>
  </div>
);

export default BaseRouter;
