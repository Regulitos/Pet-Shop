import React from "react";
import Swal from "sweetalert2";
import './iniciarsesion.css';

export default function IniciarSesion() {

    
    fetch("http://localhost:3001/registro-usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {

                    // alert("Usuario creado con éxito")
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success",
                    });
                    form.current.reset();
                    window.location.hash = "/login";
                }
                if (response.status === 400) {
                    //alert(" + response.status)
                    Swal.fire({
                        title:
                            "No fue posible crear el usuario porque ya existe el correo ingresado " +
                            formData.email,
                        icon: "warning",
                    });
                }
            })
            .catch((error) => {
                //alert("No fue posible finalizar el proceso de registro por un error " + error)
                Swal.fire({
                    title:
                        "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error",
                });
            });
    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
      
                  <div className="mb-md-5 mt-md-4 pb-5">
      
                    <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesion</h2>
                    <p className="text-white-50 mb-5">Ingresa tu correo y contraseña!</p>
      
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                      <label className="form-label" for="typeEmailX">Correo</label>
                    </div>
      
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                      <label className="form-label" for="typePasswordX">Contraseña</label>
                    </div>
      
                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvidaste tu contraseña?</a></p>
      
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Iniciar Sesion</button>
      
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>
      
                  </div>
      
                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
}