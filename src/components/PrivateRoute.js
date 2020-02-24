import React from 'react';
import { inject, observer } from 'mobx-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { autorun } from 'mobx';
import MainLayout from './MainLayout';

const PrivateRoute = ({ component: Component, authStore, ...rest }) => {
  const {isLoading, isLoggedIn}= authStore;
  return (
    <Route
      {...rest}
      render={routeProps => {
          if(isLoading) {
            return <CircularProgress></CircularProgress>
          }
          return isLoggedIn // your auth mechanism goes here
          ? <MainLayout><Component {...routeProps} /></MainLayout>
          : <Redirect to={{ pathname: "/sign_in", state: { from: routeProps.location } }} />
        }

      }
    />
  )
};

export default inject('authStore')(observer(PrivateRoute));