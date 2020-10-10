import { BrowserRouter, Switch } from 'react-router-dom';
import Route from '../src/routesPrivate';
import React from 'react';

import Main from '../src/pages/Main';
import Login from '../src/pages/Login';
import Logon from '../src/pages/Logon';
import QueryTherapist from '../src/pages/QueryTherapist';
import Dashboard from '../src/pages/Dashboard';

import EditProfile from '../src/pages/EditProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/logon" component={Logon} />
        <Route path="/editprofile" isPrivate component={EditProfile} />
        <Route path="/querytherapist" isPrivate component={QueryTherapist} />
        <Route path="/dashboard" isPrivate component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

