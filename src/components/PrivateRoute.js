import React from 'react';
import { inject, observer } from 'mobx-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { autorun } from 'mobx';

const PrivateRoute = ({ children, ...rest }) => {

    if(rest.authStore.isLoading) {
      return <CircularProgress></CircularProgress>
    }

    return (
      <Route
        {...rest}
        render={({ location }) =>
          rest.authStore.isLoggedIn ? (
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


  export default inject('authStore')(observer(PrivateRoute));