import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './reducer';
import { useDataLayer } from './StateProvider';

const Login = (props) => {
    const [{ user }, dispatch] = useDataLayer();

    //signin with Google
    const signIn = (e) => {
        // e.preventDefault find out
        auth.signInWithPopup(provider)
            .then(result => {
                // console.log('====================================');
                // console.log(result.user);
                // console.log('====================================');
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });

            })
            .catch(error => {
                alert(error.message)
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-480-80.jpg.webp" alt="" />
                <h1>Sign in to SchoolShell Slack Page</h1>
                <p>schoolshell.com</p>
                <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    );
}

export default Login;
