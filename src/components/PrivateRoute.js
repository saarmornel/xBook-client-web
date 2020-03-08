import React from 'react';
import { inject, observer } from 'mobx-react';
import Loading from '../components/Loading';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import MainLayout from './MainLayout';

const PrivateRoute = ({ component: Component, authStore, ...rest }) => {
  const {isLoading, isLoggedIn}= authStore;
  return (
    <Route
      {...rest}
      render={routeProps => {
          if(isLoading) {
            return <Loading/>
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