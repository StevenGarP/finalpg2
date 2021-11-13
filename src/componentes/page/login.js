import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './contenidos/login.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button class = "pulse" onClick={() => loginWithRedirect()}>Inicia sesion o Registrate</button>

}   