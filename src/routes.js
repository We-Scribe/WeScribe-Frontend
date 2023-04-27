import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import RegisterForm from './components/Register';
import Login from './components/Login';
import Board from './components/Board';
import Notes from './components/Notes';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/cis-hackathon/' component={Home} />
      <Route exact path='/cis-hackathon/register' component={RegisterForm} />
      <Route exact path='/cis-hackathon/login' component={Login} />
      <Route exact path='/cis-hackathon/notes' component={Notes} />
      <Route path='/cis-hackathon/board' component={Board} />
    </Switch>
  </div>
);

export default BaseRouter;
