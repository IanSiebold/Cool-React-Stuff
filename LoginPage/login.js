import React, { useState } from 'react';
import SignIn from './signin';
import SignUp from './signup';

function LoginPage({ handleLogin }) {
    const[isSignIn, setIsSignIn] = useState(true);

    const handleToggle = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSignIn = (username, password) => {
        if (username === 'admin' && password === 'password') {
            handleLogin();
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            {isSignIn ? <SignIn onSignIn={ handleSignIn } onToggle={ handleToggle }/> : <SignUp onToggle={ handleToggle }/>}
        </div>
    );
};

export default LoginPage;
