import React from 'react';
import BookGrid from "../components/BookGrid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { inject, observer } from "mobx-react";
import { makeStyles } from '@material-ui/core';
import AddBookDialog from '../components/AddBookDialog';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(11),
        right: theme.spacing(4),
    }
}))

const Giveaway = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (id) => {
        console.log(id)
        setOpen(false);
        id && props.userStore.addBook(id, true);
      };

    const classes = useStyles();
    const books = props.userStore.currentUser.myAvailableBooks || [];
    console.log(books)
    return (
        <React.Fragment>
            <BookGrid books={books}></BookGrid>
            <AddBookDialog handleClose={handleClose} open={open}/>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
        </React.Fragment>
    );
};

export default inject('userStore')(observer(Giveaway));