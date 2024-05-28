import React, { useState, useEffect } from 'react';
import user from '../userLoggedIn.json';
import './credencial.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from "sweetalert2";

function Credencial() {
    const ultimaEntrada = user[user.length - 1];
    const nombre = ultimaEntrada.nombres;
    const apellido = ultimaEntrada.apellidos;
    const email = ultimaEntrada.email;

    const [autoLogout, setAutoLogout] = useState(false);
    let executed = false;
    let timeoutId;
    useEffect(() => {
        

        const resetTimeout = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            timeoutId = setTimeout(() => {
                setAutoLogout(true);
            }, 10000);
        };

        const handleInteraction = () => {
            if (autoLogout) {
                setAutoLogout(false);
            }
            resetTimeout();
        };

        resetTimeout();

        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            clearTimeout(timeoutId);
        };
    }, [autoLogout]);

    
    useEffect(() => {
        if(autoLogout && !executed) {
            alert("La sesion se cerro por inactividad.");
        }
        if (autoLogout) {            
            window.location.href = '/'; 
        }
    }, [autoLogout]);

    return (
        <div className="container">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <p className="bienvenido">Bienvenido</p>
                </li>
                <li className="nav-item">
                    <p className="nombre-apellido">{nombre}</p>
                </li>
                <li className="nav-item">
                    <p className="nombre-apellido">{apellido}</p>
                </li>
                <li className="nav-item">
                    <p className="nombre-apellido">{email}</p>
                </li>
                <Link to='/'>
                    <li className="nav-item">
                        <LogoutIcon />
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Credencial;

