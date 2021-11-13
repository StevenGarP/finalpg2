import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import './contenidos/sesion.css';

export const Profile = () => {
    const {user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>Loading...</div>
    }

    return (isAuthenticated && [
               <div>
        <p>{user.email}</p>
        <img className = "profi" src = {user.picture} alt = { user.name} />
        <h2>{user.name}</h2>
       </div> 
    ]);
    

}