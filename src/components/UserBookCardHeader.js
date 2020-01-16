import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const UserBookCardHeader = (props) => {
    const {userThumbnail,userName,updatedAt,userId}=props;
    const date = (new Date(updatedAt)).toLocaleDateString("en-US",{year: 'numeric', month: 'long', day: 'numeric' });

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
        subheader={date}
      />
    );
    return header;
};

export default UserBookCardHeader;