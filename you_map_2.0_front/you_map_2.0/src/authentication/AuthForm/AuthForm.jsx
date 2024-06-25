import React from 'react';
import { Button, TextField, Container } from '@mui/material';

const AuthForm = () => {
    return (
        <Container>
            <h2>Login</h2>
            <form>
                <TextField label="Email" type="email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
            </form>
        </Container>
    );
};

export default AuthForm;

