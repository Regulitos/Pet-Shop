import React from 'react';
import user from '../userLoggedIn.json';
import './credencial.css';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


function Credencial() {
    const ultimaEntrada = user[user.length - 1];
    const nombre = ultimaEntrada.nombres;
    const apellido = ultimaEntrada.apellidos;

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
