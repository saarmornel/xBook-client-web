import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button,makeStyles,Container } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import UserAvatar from '../components/UserAvatar';
import { observer,inject } from "mobx-react";
import Loading from './Loading';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import UserRating from './UserRating';

const useStyles = makeStyles((theme)=>({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 100,
    },
    root: {
        marginTop: theme.spacing(3),
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    inline: {
    display: 'inline',
    },
}));

const SettingsDialog = ({ handleClose, open,userStore }) => {
    const theme = useTheme();
    const classes = useStyles();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    if(userStore.isLoadingCurrentUser) {
        return <Loading/>
    }
    return (
    <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="settings"
    >
        {/* <DialogTitle id="add-book">{"Add a Book to Your Bookshelf"}</DialogTitle> */}
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
        </IconButton>
        <DialogContent>
        
    <List className={classes.root}>
      <ListItem alignItems="center">
        <ListItemAvatar>
            <UserAvatar picture={userStore.currentUser.picture} name={userStore.currentUser.fullName}/>
        </ListItemAvatar>
        <ListItemText
          primary={userStore.currentUser.fullName}
          secondary={<UserRating {...userStore.currentUser}/>}
        />
      </ListItem>
      <Divider component="li" />
    </List>

        </DialogContent>
    </Dialog>
    );
};

SettingsDialog.propTypes = {
    
};

export default inject('userStore')(observer(SettingsDialog));