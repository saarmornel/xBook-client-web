import React from 'react';
import BookCard from './BookCard';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { inject,observer } from "mobx-react";
import UserBookCardHeader from "./UserBookCardHeader";

const RequestBookCard = (props) => {
    const {userId,id,requestStore}=props;

    const header = <UserBookCardHeader {...props}/>
    const actions = (
    <CardActions>
        <Button
        onClick={()=>handleRequest()}
        size="small" 
        color="primary">
          Request
        </Button>
    </CardActions>
    )

    const handleRequest = () => {
      requestStore.addRequest(id,userId);
    }


    return (
        <BookCard actions={actions} header={header} {...props}></BookCard>
    );
};

export default inject('requestStore')(observer(RequestBookCard));