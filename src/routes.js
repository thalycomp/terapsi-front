import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Main from '../src/pages/Main';
import Login from '../src/pages/Login';
import Logon from '../src/pages/Logon';

import EditProfile from '../src/pages/EditProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/logon" component={Logon} />
        <Route path="/edit" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
}
