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
      <Route exact path='/WeScribe-Frontend/' component={Home} />
      <Route exact path='/WeScribe-Frontend/register' component={RegisterForm} />
      <Route exact path='/WeScribe-Frontend/login' component={Login} />
      <Route exact path='/WeScribe-Frontend/notes' component={Notes} />
      <Route path='/WeScribe-Frontend/board' component={Board} />
    </Switch>
  </div>
);

export default BaseRouter;
