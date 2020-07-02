import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import UserRating from './UserRating';
import UserAvatar from '../components/UserAvatar';

const UserListItem = props => (
    <ListItem key={props.id}>
        <ListItemAvatar>
            <UserAvatar picture={props.picture} name={props.fullName}/>
        </ListItemAvatar>
        <ListItemText
        primary={props.fullName}
        secondary={<UserRating {...props}/>}
        />
  </ListItem>
)

export default UserListItem;