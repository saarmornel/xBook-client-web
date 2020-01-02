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

const Routes = (props) => {

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          props.authStore.isLoggedIn ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/sign_in",
                }}
              />
            )
        }
      />
    );
  }
  console.log(props.authStore.isLoggedIn)
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
      <PrivateRoute path="/">
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