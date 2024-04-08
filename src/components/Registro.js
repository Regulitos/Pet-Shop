import React, { useState } from "react";
import './registro.css';

function Registro() {
    const [formData, setFormData] = useState({
        identificacion: "",
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        telefono: "",
        fecha: "",
        password: "",
        repassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const [errors, setErrors] = useState({
        ident: "",
        nameError: "",
        lastError: "",
        emailError: "",
        dirError: "",
        telefonoError: "",
        passErr: "",
        repassErr: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe automáticamente y recargue la página

        var error = false;
        //Validaciones de Identificacion.
        console.log(formData.identificacion);
        if (formData.identificacion === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                ident: "Por favor, complete este campo."
            }));
            error = true;
        } else if (formData.identificacion.length < 5) {
            setErrors(prevErrors => ({
                ...prevErrors,
                ident: "La identificacion no es valida, tiene menos de 5 digitos"
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                ident: ""
            }));
        }

        //Validaciones de Nombre
        console.log(formData.nombre);
        if (formData.nombre === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                nameError: "Por favor, complete este campo."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                nameError: "",
            }));
        }

        //Validacion de Apellido
        console.log(formData.apellido);
        if (formData.apellido === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                lastError: "Por favor, complete este campo."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                lastError: "",
            }));
        }

        //Validacion de correo
        console.log(formData.email);
        if (formData.email === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                emailError: "Por favor, complete este campo."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                emailError: "",
            }));
        }

        //Validacion de Direccion
        console.log(formData.direccion);
        if (formData.direccion === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                dirError: "Por favor, complete este campo."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                dirError: "",
            }));
        }

        //Validacion de telefono
        console.log(formData.telefono);
        if (formData.telefono === "") {
            setErrors(prevErrors => ({
                ...prevErrors,
                telefonoError: "Por favor, complete este campo."
            }));
            error = true;
        } else if (formData.telefono.length < 7) {
            setErrors(prevErrors => ({
                ...prevErrors,
                telefonoError: "El numero de telefono no es valido."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                telefonoError: ""
            }));
        }

        //Validacion de Fecha
        console.log(formData.fecha);
        if (!formData.fecha) {
            setErrors(prevErrors => ({
                ...prevErrors,
                fechaError: "Por favor, complete este campo."
            }));
            error = true;
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                fechaError: "",
            }));
        }

        //Validacion de Contraseña 
        console.log(formData.password);
        var regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
        if(!regexp_password.test(formData.password)){
            setErrors(prevErrors=>({
                ...prevErrors,
                passErr: "Siga las instrucciones para la creacion de la contraseña."
            }));
            error = true;
        }else if(formData.password===""){
            setErrors(prevErrors=>({
                ...prevErrors,
                passErr: "Por favor, complete este campo."
            }));
            error = true;
        }else if(formData.password!==formData.repassword){
            setErrors(prevErrors=>({
                ...prevErrors,
                repassErr: "Las contraseñas no coinciden."
            }));
            error = true;
        }else{
            setErrors(prevErrors=>({
                ...prevErrors,
                passErr: "",
                repassErr: "",
            }));
        }


        if (error) {
            return;
        }
        alert("Datos enviados con exito");
        console.log("Datos enviados:", formData);
    };

    return (
        <div className="registro-container">
            <form className="registro-form">
                <h2>Registro</h2>
                <div className="column-left">
                    <div className="form-group">
                        <label htmlFor="id">Identificacion:</label>
                        <input type="number" id="id" name="identificacion" placeholder="Ingrese su Identificacion 5-10 digitos." pattern="^[0-9]*$" value={formData.identificacion} onChange={handleChange} />
                        <p className="error">{errors.ident}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese su Nombre" value={formData.nombre} onChange={handleChange} />
                        <p className="error">{errors.nameError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="lastname" name="apellido" placeholder="Ingrese su Apellido" value={formData.apellido} onChange={handleChange} />
                        <p className="error">{errors.lastError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su Correo" value={formData.email} onChange={handleChange} />
                        <p className="error">{errors.emailError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion">Direccion:</label>
                        <input type="text" id="direccion" name="direccion" placeholder="Ingrese su Direccion" value={formData.direccion} onChange={handleChange} />
                        <p className="error">{errors.dirError}</p>
                    </div>
                </div>
                <div className="column-right">
                    <div className="form-group">
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="number" id="telefono" name="telefono" placeholder="Ingrese su telefono 7-11 digitos" value={formData.telefono} onChange={handleChange} />
                        <p className="error">{errors.telefonoError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha de Nacimiento:</label>
                        <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
                        <p className="error">{errors.fechaError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <p>Minimo 8 caracteres, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, Al menos 1 caracter especial</p>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        <p className="error">{errors.passErr}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Repita la Contraseña:</label>
                        <input type="password" id="repassword" name="repassword" value={formData.repassword} onChange={handleChange} />
                        <p className="error">{errors.repassErr}</p>
                    </div>

                    <button type="submit" onClick={handleSubmit}>Registrarse</button>
                </div>
            </form>
        </div>

    );
}

export default Registro;