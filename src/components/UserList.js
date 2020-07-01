import React from 'react';
import PropTypes from 'prop-types';

const UserList = props => {
    return (

    <List className={classes.root}>
      <ListItem alignItems="center">
        <ListItemAvatar>
            <UserAvatar picture={userStore.currentUser.picture} name={userStore.currentUser.fullName}/>
        </ListItemAvatar>
        <ListItemText
          primary={userStore.currentUser.fullName}
          secondary={<UserRating {...userStore.currentUser}/>}
        />
      </ListItem>
      <Divider component="li" />


    );
};

UserList.propTypes = {
    
};

export default UserList;