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
  import { authFacebook } from "../services/auth.service";

const SignIn = inject('authStore')(observer(
    (props) => {
    let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const onFailed = async () => {
        console.log('failed');
    }
    
    const onSuccess = async (token) => {
        await props.authStore.setToken(token);
        history.replace('/explore')
    }

    
    let login = async () => {
        const response = await authFacebook();
        console.log(response);
        if(response.success) {
            await onSuccess(response.auth_token);
        } else {
            await onFailed();
        }
    };

    return (
        <div>
            <p>You must log in to view the page</p>
            <button onClick={login}>Log in</button>
        </div>
    );
    }
));


export default SignIn;