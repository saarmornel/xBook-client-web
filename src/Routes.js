import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Giveaway from './screens/Giveaway';
import Reading from './screens/Reading';
import Requests from './screens/Requests';
import SignIn from './screens/SignIn';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
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


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/sign_in">
                <SignIn></SignIn>
            </Route>
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
        </Switch>
    );
};

export default Routes;