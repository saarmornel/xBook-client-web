import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Giveaway from './screens/Giveaway';
import Reading from './screens/Reading';
import Requests from './screens/Requests';
import SignIn from './screens/SignIn';

const Routes = (props) => {
  
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          props.authStore.loadToken() ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/sign_in",
                  state: { from: location }
                }}
              />
            )
        }
      />
    );
  }

  return (
    <Switch>
      <PrivateRoute exact path="/explore">
        <Explore></Explore>
      </PrivateRoute>
      <PrivateRoute exact path="/add_book">
        <AddBook></AddBook>
      </PrivateRoute>
      <PrivateRoute exact path="/reading">
        <Reading></Reading>
      </PrivateRoute>
      <PrivateRoute exact path="/giveaway">
        <Giveaway></Giveaway>
      </PrivateRoute>
      <PrivateRoute exact path="/requests">
        <Requests></Requests>
      </PrivateRoute>
      <Route exact path="/sign_in">
        <SignIn></SignIn>
      </Route>
    </Switch>
  );
};

export default inject('authStore')(observer(Routes));