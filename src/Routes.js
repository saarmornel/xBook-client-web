import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Explore from './screens/Explore';
import Giveaway from './screens/Giveaway';
import Requests from './screens/Requests';
import SignIn from './screens/SignIn';
import { inject, observer } from 'mobx-react';
import MainLayout from './components/MainLayout';
import Settings from "./screens/Settings";

import PrivateRoute from "./components/PrivateRoute";

const Routes = (props) => {

  return (
    <Switch>
      <PrivateRoute path="/explore">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/giveaway">
        <MainLayout><Giveaway /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/requests">
        <MainLayout><Requests /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/settings">
        <MainLayout><Settings /></MainLayout>
      </PrivateRoute>
      <Route path="/sign_in">
        <SignIn/>
      </Route>
      <PrivateRoute exact path="/">
        <Redirect
                to={{
                  pathname: "/explore",
                }}
        />
      </PrivateRoute>
    </Switch>
  );
};

export default inject('authStore')(observer(Routes));