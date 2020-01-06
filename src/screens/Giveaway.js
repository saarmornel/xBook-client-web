import React from 'react';
import BookGrid from "../components/BookGrid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { inject, observer } from "mobx-react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}))

const Giveaway = (props) => {
    const classes = useStyles();
    const books = props.userStore.currentUser.myAvailableBooks||[];
    return (
        <React.Fragment>
            <BookGrid books={books}></BookGrid>
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </React.Fragment>
    );
};

export default inject('userStore')(observer(Giveaway));