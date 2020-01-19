import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import BookIcon from '@material-ui/icons/Book';
import { makeStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const ratingCalc = (balance) => {
  const rating = (balance+50)*5/100;
  if(rating>5) return 5;
  if(rating <1) return 1;
  return rating
}

const useStyles = makeStyles({
  rating: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

const UserBookCardHeader = (props) => {
    const classes = useStyles();
    const {userThumbnail,userName,updatedAt,userId,userBalance,userGiven,userReceived}=props;
    const date = (new Date(updatedAt)).toLocaleDateString("en-US",{year: 'numeric', month: 'long', day: 'numeric' });
    const rating =  <Rating precision={0.5} size="small" name="book-balance" 
    value={ratingCalc(userBalance)} disabled 
    icon={<BookIcon fontSize="inherit"/>}/>
    const header = (
        <CardHeader
        avatar={
          <Avatar src={userThumbnail}>
            {userName&&userName.slice(0,1)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={userName}
        subheader={
        <span className={classes.rating}>
          {date}
          <Box ml={1} mr={1} component="span">•</Box>
          {rating}
        </span>
        }
      />
    );
    return header;
};

export default UserBookCardHeader;