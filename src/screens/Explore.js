import React from 'react';
import { inject, observer } from "mobx-react";
import { UserBookGrid } from '../components/BookGrid';
import Fab from '@material-ui/core/Fab';
import { PersonAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import AddFriendsDialog from '../components/AddFriendsDialog';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(9),
        right: theme.spacing(4),
    }
}))

const Explore = (props) => {
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
            <UserBookGrid books={props.bookStore.books}/>
            <AddFriendsDialog handleClose={handleClose} open={open}/>
            <Fab color="primary" aria-label="add-friends" className={classes.fab} onClick={handleClickOpen}>
                <PersonAdd />
            </Fab>
        </React.Fragment>
    );
};

export default inject('bookStore')(observer(Explore));