import React from 'react';
import AuthForm from '../../authentication/AuthForm/AuthForm';
import GoogleAuth from '../../authentication/AuthForm/GoogleAuth';

const AuthPage = () => {
    return (
        <div>
            <h1>Welcome to Auth page</h1>
            <AuthForm />
            <GoogleAuth />
        </div>
    );
};

export default AuthPage;
