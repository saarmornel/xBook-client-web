import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {observer} from 'mobx-react';
import Routes from "./Routes";
import userStore from './stores/user.store';
import authStore from './stores/auth.store';
import requestStore from './stores/request.store';
import bookStore from './stores/book.store';
import { Provider } from 'mobx-react';
import { configure, autorun } from 'mobx';
import { CssBaseline, Container } from '@material-ui/core';

configure({ enforceActions: 'always' });

const stores = {
  userStore,
  authStore,
  requestStore,
  bookStore
};

function App() {
  useEffect(()=> stores.authStore.loadToken(),[])
  useEffect(()=>{stores.authStore.token&&stores.requestStore.pullIncoming()},[stores.authStore.token])
  useEffect(()=>{stores.authStore.token&&stores.requestStore.pullOutgoing()},[stores.authStore.token])
  useEffect(()=>{stores.authStore.token&&stores.bookStore.pullBooks()},[stores.authStore.token])
  useEffect(()=>{stores.authStore.token&&stores.bookStore.pullMyBooks()},[stores.authStore.token])

  return (
    <Provider {...stores}>
      <CssBaseline />
      <BrowserRouter>
            <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default observer(App);
