import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    avatar: {
      margin: theme.spacing(1,1,2,1),
      width: 180,
      height: 180,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  }));

const EmptyState = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="xs" className={classes.paper}>
            {props.logo&&<img className={classes.avatar} src={props.logo}/>}
            <Typography align="center" variant="h5" gutterBottom={true}>
                {props.title}
            </Typography>
            <Typography align="center" variant="subtitle1" >
                {props.text}
            </Typography>
        </Container>
    );
};

EmptyState.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    logo: PropTypes.string
};

export default EmptyState;