import React from 'react';
import PropTypes from 'prop-types';
import UserListItem from './UserListItem';
import {inject,observer} from 'mobx-react';
import {Button, Container, Divider, Box} from '@material-ui/core'

const UserListItemExtended = props => {
    const id = props.user.id;
    const index = props.userStore.currentUser.friends.
    findIndex(friend => friend.id === id);

    return (
        <div>
        <UserListItem {...props.user}></UserListItem>
        <Box display="flex" justifyContent="center" mb={3}>
        {index>-1?
                <Button size="small" variant="contained" color="default" onClick={()=>props.userStore.removeFriend(id)}>
                    Following
                </Button>
                :
                <Button size="small" variant="contained" color="primary" onClick={()=>props.userStore.addFriend(props.user)}>
                    Follow
                </Button>
                }

        </Box >
        <Divider variant="middle" />
        </div>

    );
};

UserListItemExtended.propTypes = {
    
};

export default inject('userStore')(observer(UserListItemExtended));