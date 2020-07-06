import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import BookIcon from '@material-ui/icons/Book';
import { Tooltip } from '@material-ui/core';

const MyComponent = React.forwardRef(function MyComponent(props, ref) {
    //  Spread the props to the underlying DOM element.
    return <span {...props} ref={ref}>
        <Rating 
        precision={0.5} 
        size="small" 
        name="book-stars" 
        value={props.stars} disabled 
        icon={<BookIcon fontSize="inherit"/>}/>
    </span>
});

const UserRating = props => {
    return (
    <Tooltip title={props.given&&props.received?`Gave ${props.given} books/Got ${props.received} books`:''} arrow>
        <MyComponent stars={props.stars}/>
    </Tooltip>

    );
};

UserRating.propTypes = {
    stars: PropTypes.number.isRequired,
    given: PropTypes.number,
    received: PropTypes.number,
};

export default UserRating;