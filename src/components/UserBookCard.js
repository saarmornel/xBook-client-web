import React, { useState } from 'react';
import BookCard from './BookCard';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { inject,observer } from "mobx-react";
import UserBookCardHeader from "./UserBookCardHeader";
import Link from '@material-ui/core/Link';

const UserBookCard = (props) => {
    const {user,id,requestStore}=props;
    const isRequested = requestStore.outgoing.findIndex(o=>o.book===id&&o.user.id===user.id) > -1;

    const header = <UserBookCardHeader {...props}/>
    const actions = (
    <CardActions>
        <Button
        disabled={isRequested}
        onClick={()=>handleRequest()}
        size="small" 
        color="primary">
          {isRequested ? 'Requested' : 'Request'}
        </Button>
        <Link href="/app/requests" variant="body2">
          Go to Requests
        </Link>
    </CardActions>
    )

    const handleRequest = () => {
      requestStore.addRequest(id,user.id);
    }


    return (
        <BookCard actions={actions} header={header} {...props}></BookCard>
    );
};

export default inject('requestStore')(observer(UserBookCard));