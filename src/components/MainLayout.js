import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import BottomNavbar from './BottomNavbar';
import TopNavbar from './TopNavbar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    main: {
      overflowY: 'auto',
      height: '100%',
    },
    footer: {
      backgroundColor: '#fff',
      marginTop: 'auto',
    }
  }));

const MainLayout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <header>
            <TopNavbar/>
          </header>

          <main className={classes.main}>
            {props.children}
          </main>

          <footer className={classes.footer}>
            <Container component="nav" maxWidth="sm" disableGutters>
              <BottomNavbar />
            </Container>
          </footer>
        </div>
    );
};

export default MainLayout;