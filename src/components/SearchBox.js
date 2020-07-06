import React from 'react';
import PropTypes from 'prop-types';
import {TextField, Container, makeStyles, Box} from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    searchBox: {
        display: 'flex',
        alignItems: 'flex-end',
    }
}));

const SearchBox = ({search, onSearch,label,children}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.searchBox}>
            <TextField
            type="search"
            onChange={(event)=> onSearch(event.target.value)}
            value={search}
            id="search-box" label={label} />
            {children}
        </div>

    )
}


SearchBox.propTypes = {
    search: PropTypes.string,
    onSearch: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node,
};

export default SearchBox;