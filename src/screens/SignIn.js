import React from 'react';
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

const qs = require('query-string');

const SignIn =
    (props) => {
        let history = useHistory();
        let location = useLocation();
        const authToken = qs.parse(location.search, { ignoreQueryPrefix: true }).auth_token;

        const onFailed = async () => {
            console.log('auth failed');
        }

        const onSuccess = async (token) => {
            console.log('auth succeeded');
            await props.authStore.setToken(token);
            history.replace('/');
        }

        console.log(authToken)
        if (authToken) {
            if (authToken === 'null') {
                onFailed();
            } else {
                onSuccess(authToken);
            }
        }

        return (
            <div>
                <p>You must log in to view the page</p>
                <a href="https://glacial-fortress-14735.herokuapp.com/api/auth/facebook/" > Login with Facebook</a>
            </div>
        );
    }



export default inject('authStore')(observer(SignIn))