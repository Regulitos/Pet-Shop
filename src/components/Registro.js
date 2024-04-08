import React from "react";
import './registro.css';

export default function Registro() {
    return (
        <div className="registro-container">
            <form className="registro-form">
                <h2>Registro</h2>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>

    );
}