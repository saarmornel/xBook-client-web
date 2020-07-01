import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {APP_NAME} from '../config';
import logo from './logo.png';
import { AccountCircle } from '@material-ui/icons';
import {IconButton} from '@material-ui/core';
import SettingsDialog from '../components/SettingsDialog';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
    avatar: {
      height: '50px',
      marginRight: theme.spacing(2),
    }
  }));

const TopNavbar = props => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <React.Fragment>
        <AppBar position="static">
            <Toolbar>
              <img className={classes.avatar} src={logo}></img>
              <Typography variant="h6" className={classes.title}>
                {APP_NAME}
              </Typography>
              <IconButton
              color="inherit"
              onClick={handleClickOpen}
              >
                <AccountCircle />
              </IconButton>
            </Toolbar>
        </AppBar>
        <SettingsDialog handleClose={handleClose} open={open}/>
      </React.Fragment>
   
    );
};

export default TopNavbar;