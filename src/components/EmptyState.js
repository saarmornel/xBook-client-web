import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Typography, Link, Box } from '@material-ui/core';
import logo from "./emptyState.png";

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
            <img className={classes.avatar} src={props.logo || logo}/>
            <Typography align="center" variant="h5" gutterBottom={2}>
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