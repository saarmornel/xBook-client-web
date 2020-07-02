import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from "./UserListItem";
import { List,Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

const UserList = props => {
    const classes = useStyles();
    return (

    <List className={classes.root}>
      {props.users.map( user =>
        <UserListItem key={user.id} {...user}/>
      )}
      {/* <Divider component="li" /> */}
    </List>

    );
};

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;
