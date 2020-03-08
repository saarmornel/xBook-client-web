import React, { useState } from 'react';
import BookCard from './BookCard';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { inject,observer } from "mobx-react";
import UserBookCardHeader from "./UserBookCardHeader";

const UserBookCard = (props) => {
    const {user,id,requestStore}=props;
    const [isRequested, setIsRequested] = useState(false)

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
    </CardActions>
    )

    const handleRequest = () => {
      setIsRequested(true);
      requestStore.addRequest(id,user.id);
    }


    return (
        <BookCard actions={actions} header={header} {...props}></BookCard>
    );
};

export default inject('requestStore')(observer(UserBookCard));