import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import UserAvatar from '../components/UserAvatar';

import { makeStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import UserRating from './UserRating';

const useStyles = makeStyles({
  rating: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

const UserBookCardHeader = (props) => {
    const classes = useStyles();
    const {user,updatedAt}=props;
    const date = (new Date(updatedAt)).toLocaleDateString("en-US",{year: 'numeric', month: 'long', day: 'numeric' });
    const header = (
        <CardHeader
        avatar={<UserAvatar picture={user.picture} name={user.fullName}/>}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={user.fullName}
        subheader={
        <span className={classes.rating}>
          {date}
          <Box ml={1} mr={1} component="span">•</Box>
          <UserRating stars={user.stars} given={user.given} received={user.received}/>
        </span>
        }
      />
    );
    return header;
};

export default UserBookCardHeader;