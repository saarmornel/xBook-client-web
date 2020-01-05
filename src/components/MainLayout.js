import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import BottomNavbar from './BottomNavbar';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2)+56,
    },
    footer: {
      marginTop: 'auto',
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