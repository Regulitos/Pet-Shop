import React from "react";
import './registro.css';

export default function IniciarSesion() {
    return (
        <div className="registro-container">
            <form className="registro-form">
                <h2>Inicio de Sesion</h2>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>

    );
}