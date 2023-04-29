import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import RegisterForm from './components/Register';
import Login from './components/Login';
import Board from './components/Board';
import Notes from './components/Notes';
import MyNavbar from './components/MyNavbar';

const BaseRouter = () => (
    <Switch>
    <Route path='/WeScribe-Frontend/board' component={Board} />
    <div>
      <MyNavbar/>
      <Route exact path='/WeScribe-Frontend/' component={Home} />
      <Route exact path='/WeScribe-Frontend/register' component={RegisterForm} />
      <Route exact path='/WeScribe-Frontend/login' component={Login} />
      <Route exact path='/WeScribe-Frontend/notes' component={Notes} />
      </div>
    </Switch>
);

export default BaseRouter;
