import React, { Component } from 'react';
import BookCard from './BookCard';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const UserBookCard = (props) => {
    console.log(props)
    const {userThumbnail,userName,updatedAt}=props;

    const header = (
        <CardHeader
        avatar={
          <Avatar src={userThumbnail}>
            {userName.slice(0,1)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={userName}
        subheader={(new Date(updatedAt)).toLocaleDateString("en-US",{year: 'numeric', month: 'long', day: 'numeric' })}
      />
    );
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
      
    }


    return (
        <BookCard actions={actions} header={header} {...props}></BookCard>
    );
};

export default UserBookCard;