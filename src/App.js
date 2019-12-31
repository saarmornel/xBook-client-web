import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import BottomNavbar from './components/BottomNavbar';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import userStore from './stores/user.store';
import authStore from './stores/auth.store';
import { Provider } from 'mobx-react';

const stores = {
  userStore,
  authStore
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    // padding: theme.spacing(3, 0),
    marginTop: 'auto',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Provider {...stores}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Routes />
          </Container>

          <footer className={classes.footer}>
            <Container component="nav" maxWidth="sm" disableGutters>
              <BottomNavbar />
            </Container>
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
