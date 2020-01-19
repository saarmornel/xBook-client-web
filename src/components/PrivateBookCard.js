import React from 'react';
import BookCard from './BookCard';
import { observer,inject } from "mobx-react";
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const PrivateBookCard = (props) => {
    const actions =       
    <CardActions key="actions">
        <Button
        onClick={()=>props.userStore.deleteBook(props.id)}
        startIcon={<DeleteIcon />}
        >
        Delete
      </Button>
    </CardActions>

    return (
            <BookCard actions={actions} {...props}/>
    );
};

export default inject('userStore')(observer(PrivateBookCard));