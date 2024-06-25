import React from 'react';
import { Button } from '@mui/material';

const GoogleAuth = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:8000/auth/social/login/google/';
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleGoogleLogin}>
            Login with Google
        </Button>
    );
};

export default GoogleAuth;
