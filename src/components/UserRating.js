import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import BookIcon from '@material-ui/icons/Book';

const UserRating = props => {
    return (
    <UserRating precision={0.5} size="small" name="book-stars" 
    value={props.stars} disabled 
    icon={<BookIcon fontSize="inherit"/>}/>
    );
};

UserRating.propTypes = {
    stars: PropTypes.number,
    given: PropTypes.number,
    received: PropTypes.number,
};

export default UserRating;