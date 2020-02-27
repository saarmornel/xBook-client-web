import React from 'react';
import PropTypes from 'prop-types';
import {TextField, Container, makeStyles, Box} from '@material-ui/core';

const PoweredByGoogle =
<Box component="span" marginLeft={2}>
    <a href="https://www.google.com">
        <img src="https://books.google.com/googlebooks/images/poweredby.png" style={{border: 0}}/>
    </a>
</Box>


const useStyles = makeStyles(theme=>({
    searchBox: {
        display: 'flex',
        alignItems: 'flex-end',
    }
}));

const SearchBox = ({search, onSearchBook}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.searchBox}>
            <TextField
            onChange={(event)=> onSearchBook(event.target.value)}
            value={search}
            id="search-book" label="Search book" />
            {PoweredByGoogle}
        </div>

    )
}


SearchBox.propTypes = {
    search: PropTypes.string,
    onSearchBook: PropTypes.func
};

export default SearchBox;