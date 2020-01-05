import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Giveaway from './screens/Giveaway';
import Reading from './screens/Reading';
import Requests from './screens/Requests';
import SignIn from './screens/SignIn';
import { inject, observer } from 'mobx-react';
import MainLayout from './components/MainLayout';

import PrivateRoute from "./components/PrivateRoute";

const Routes = (props) => {

  return (
    <Switch>
      <PrivateRoute path="/explore">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/add_book">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/reading">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/giveaway">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <PrivateRoute path="/requests">
        <MainLayout><Explore /></MainLayout>
      </PrivateRoute>
      <Route path="/sign_in">
        <SignIn></SignIn>
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