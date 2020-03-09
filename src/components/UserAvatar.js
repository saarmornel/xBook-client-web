import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const UserAvatar = props => {
    return (
    <Avatar src={props.picture}>
        {props.name&&props.name.slice(0,1)}
    </Avatar>
    );
};

UserAvatar.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
};

export default UserAvatar;