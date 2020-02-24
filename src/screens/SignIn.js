import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { inject, observer } from 'mobx-react';
import { serverUrl } from "../config";
import { Container,Avatar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from "./logo.png";
const qs = require('query-string');

const FB_URL=`${serverUrl}/api/auth/facebook/`;

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1,1,2,1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));


const SignIn =
    (props) => {
        let history = useHistory();
        let location = useLocation();
        const classes = useStyles();
        
        useEffect(()=>{
            const authToken = qs.parse(location.search, { ignoreQueryPrefix: true }).auth_token;

            if (authToken) {
                if (authToken === 'null') {
                    onFailed();
                } else {
                    onSuccess(authToken);
                }
            }
        })
        
        const onFailed = async () => {
            console.log('auth failed');
        }

        const onSuccess = async (token) => {
            console.log('auth succeeded');
            await props.authStore.setToken(token);
            history.replace('/app');
        }

        return (
            <Container component="main" maxWidth="xs" className={classes.paper}>
                <img className={classes.avatar} src={logo}/>
                <Typography component="h1" variant="h6">
                    xBook
                </Typography>
                <Button href={FB_URL}
                fullWidth variant="contained" color="primary" className={classes.submit}>Continue with Facebook</Button>
            </Container>
        );
    }



export default inject('authStore')(observer(SignIn))
