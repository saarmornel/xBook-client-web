import React from 'react';
import { inject, observer } from "mobx-react";
import { UserBookGrid } from '../components/BookGrid';
import Fab from '@material-ui/core/Fab';
import { PersonAdd } from '@material-ui/icons';
import { makeStyles} from '@material-ui/core';
import AddFriendsDialog from '../components/AddFriendsDialog';
import EmptyState from '../components/EmptyState';
import logo from './EmptyBook.png';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
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
            {!props.bookStore.books.length && 
            <EmptyState title="No books to show" text="Your friends books will show up here." logo={logo}/>
            }
            <UserBookGrid books={props.bookStore.books}/>
            <AddFriendsDialog handleClose={handleClose} open={open}/>
            <Fab color="primary" aria-label="add-friends" className={classes.fab} onClick={handleClickOpen}>
                <PersonAdd />
            </Fab>
        </React.Fragment>
    );
};

export default inject('bookStore')(observer(Explore));