import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './reducer';
import { useDataLayer } from './StateProvider';
import logo from './images/logo.png'

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
                <img src={logo} alt="" />
                <h1>SchoolShell Chat Room</h1>
                <p>schoolshell.com</p>
                <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    );
}

export default Login;
