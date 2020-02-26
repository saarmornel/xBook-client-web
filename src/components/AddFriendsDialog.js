import React from 'react';
import PropTypes from 'prop-types';
import { FB_URL,CLIENT_URL,APP_NAME } from "../config";
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, TextField,makeStyles,Container } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Facebook } from '@material-ui/icons';

const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    button: {
        margin: theme.spacing(0, 0, 2),
    },
    paper: {
        marginTop: theme.spacing(10),
    }
});

const onShare = () => {
    if(navigator.share) {
        navigator.share({
          title: APP_NAME,
          text: 'Trade books with your friends',
          url: CLIENT_URL
        })
        .then(() => console.log('Share complete'))
        .error((error) => console.error('Could not share at this time', error))
      }
}

const AddFriendsDialog = ({ handleClose, open, classes }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="find-friends"
        >
            <DialogTitle id="find-friends">{"Find Friends"}</DialogTitle>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                 <CloseIcon />
            </IconButton>
            <DialogContent>
                    <Container className={classes.paper}>
                        <Button
                            fullWidth 
                            variant="outlined" 
                            className={classes.button}>Share xBook</Button>
                        <Button href={FB_URL}
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            startIcon={<Facebook />}
                            className={classes.button}>Add Facebook friends</Button>
                    </Container>
            </DialogContent>
        </Dialog>
    );
};

AddFriendsDialog.propTypes = {
    
};

export default withStyles(styles)(AddFriendsDialog);