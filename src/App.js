import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import userStore from './stores/user.store';
import authStore from './stores/auth.store';
import { Provider } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { configure, autorun } from 'mobx';
import { CssBaseline, Container } from '@material-ui/core';

configure({ enforceActions: 'always' });

const stores = {
  userStore,
  authStore
};

function App() {
  useEffect(()=> {loadToken(stores)},[])
  return (
    <Provider {...stores}>
      <CssBaseline />
      <BrowserRouter>
            <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;


const loadToken = (stores) => {
  try {
      stores.authStore.loadToken();
  } catch {
      stores.authStore.logout();
  }
}
