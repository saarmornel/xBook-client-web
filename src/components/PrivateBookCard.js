import React from 'react';
import BookCard from './BookCard';
import { observer,inject } from "mobx-react";
import { Delete } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const PrivateBookCard = (props) => {
    const actions =       
    <CardActions key="actions">
        <IconButton size="small" onClick={()=>props.userStore.deleteBook(props.id)}>
          <Delete />
        </IconButton>
    </CardActions>

    return (
            <BookCard actions={actions} {...props}/>
    );
};

export default inject('userStore')(observer(PrivateBookCard));