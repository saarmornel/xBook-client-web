import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import userStore from './stores/user.store';
import authStore from './stores/auth.store';
import { Provider } from 'mobx-react';

const stores = {
  userStore,
  authStore
};

function App() {
  useEffect(()=> {loadToken(stores)})
  return (
    <Provider {...stores}>
      <BrowserRouter>
            <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;


const loadToken = async (stores) => {
  try {
      await stores.authStore.loadToken();
  } catch {
      await stores.authStore.logout();
  }
}
