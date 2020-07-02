import React, {useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, TextField,makeStyles,Container, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { shareApp } from "../services/helpers";
import SearchBox from './SearchBox';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserList from './UserList';
import { searchUser, getMyFriends } from '../services/user.service';

const styles = theme => ({
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    button: {
        margin: theme.spacing(2, 0, 2),
    },

});

const AddFriendsDialog = ({ handleClose, open, classes }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>onSearchFriend(),[]);

    const onSearchFriend = (name='') => {
        setSearch(name);
        if(name.length > 2 || name.length===0) {
          setIsLoading(true);
          setTimeout(()=> {
            (name.length===0 ? 
              getMyFriends():
              searchUser(name))
            .then(setResults);
          },3);
        } else {
          setResults([]);
        }
        setIsLoading(false);
      }

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
                        <SearchBox search={search} onSearch={onSearchFriend}
                        label="Search friend"/>
                        
                        { isLoading ? <CircularProgress/> :
                        [(search.length === 0 && 
                        <Typography key="following" variant="subtitle1" gutterBottom={true}>My Following</Typography>),
                        <UserList key="users" users={results}/> ]
                        }
                        
                        <Button
                            onClick={()=>shareApp()}
                            fullWidth 
                            variant="outlined" 
                            className={classes.button}>Share xBook</Button>
                        {/* <Button href={FB_URL}
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            startIcon={<Facebook />}
                            className={classes.button}>Add Facebook friends</Button> */}
                    </Container>
            </DialogContent>
        </Dialog>
    );
};

export default withStyles(styles)(AddFriendsDialog);