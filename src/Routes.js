import React from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import Explore from './screens/Explore';
import Giveaway from './screens/Giveaway';
import Requests from './screens/Requests';
import SignIn from './screens/SignIn';
import Settings from "./screens/Settings";

import PrivateRoute from "./components/PrivateRoute";

const NotFound = () => <h1>Not Found</h1>;

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign_in" component={SignIn}/>
      <Route path="/app" component={AppLayout}/>
      <Redirect to="/app" />
      {/* <Route path="/" component={NotFound}/> */}
    </Switch>
  )
}

const AppLayout = () => {
  return (
    <Switch>
      <PrivateRoute path="/app/explore" component={Explore} exact></PrivateRoute>
      <PrivateRoute path="/app/giveaway" component={Giveaway} exact></PrivateRoute>
      <PrivateRoute path="/app/requests" component={Requests} exact></PrivateRoute>
      <PrivateRoute path="/app/settings" component={Settings} exact></PrivateRoute>
      <Redirect exact from="/app" to="/app/explore" />
    </Switch>
  )
}

export default Routes;