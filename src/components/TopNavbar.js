import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {APP_NAME} from '../config';
import LocalLibrarySharpIcon from '@material-ui/icons/LocalLibrarySharp';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const TopNavbar = props => {
    const classes = useStyles();
    return (
    <AppBar position="static">
        <Toolbar>
          <Icon edge="start" className={classes.menuButton} color="inherit">
            <LocalLibrarySharpIcon />
          </Icon>
          <Typography variant="h6" className={classes.title}>
            {APP_NAME}
          </Typography>

        </Toolbar>
    </AppBar>
    );
};

export default TopNavbar;