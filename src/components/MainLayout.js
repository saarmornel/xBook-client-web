import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import BottomNavbar from './BottomNavbar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    main: {
      marginTop: theme.spacing(5),
      marginBottom: '60px',
      overflowY: 'auto',
      height: '100%',
    },
    footer: {
      backgroundColor: '#fff',
      position: 'fixed',
      bottom: 0,
      zIndex: 100,
      width: '100%'
    }
  }));

const MainLayout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Container component="main" className={classes.main} maxWidth="sm">
            {props.children}
          </Container>

          <footer className={classes.footer}>
            <Container component="nav" maxWidth="sm" disableGutters>
              <BottomNavbar />
            </Container>
          </footer>
        </div>
    );
};

export default MainLayout;