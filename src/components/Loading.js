import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <CircularProgress/>
        </div>
    );
};

export default Loading;