const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
app.use(cors());
const connection = require('../configDB/configDB.js');

const controller = {

  register: function (req, res) {
    console.log(req.body);
    let config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: 'https://api.jsonbin.io/v3/b/6654d654acd3cb34a84e8a8f',
      headers: {
        'Content-Type': 'application/json',
        "X-Master-Key": "$2a$10$tXYZjUGhzvUyEAi/f/aE0.4Rk496UQhLjWM6B7cO05xSPwBvOxovK"
      }
    };
    console.log(config);
    axios(config)
      .then(result => {
        let id = result.data.record.length + 1;
        const usuarioNuevo = {
          id: id,
          identificacion: req.body.identificacion,
          nombres: req.body.nombre,
          apellidos: req.body.apellido,
          email: req.body.email,
          direccion: req.body.direccion,
          ciudad: req.body.ciudad,
          departamento: req.body.depto,
          telefono: req.body.telefono,
          fechaNacimiento: req.body.fecha,
          password: req.body.password,
          estado: "activo",
          rol: "Usuario",
          fecha_creación: new Date()
        };
        if (result.data.record.length === 0) {
          result.data.record.push(usuarioNuevo)
        }
        else {
          for (x of result.data.record) {
            if (x.email === req.body.email) {
              res.status(400).send("Usuario ya existe en la Base de Datos")
              return
            }
          }
          result.data.record.push(usuarioNuevo)
        }

        fetch("https://api.jsonbin.io/v3/b/6654d654acd3cb34a84e8a8f", {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
            "X-Master-Key": "$2a$10$tXYZjUGhzvUyEAi/f/aE0.4Rk496UQhLjWM6B7cO05xSPwBvOxovK"
          },
          body: JSON.stringify(result.data.record),
        })
          // let configPut = {
          //   method: "PUT",
          //   url: "https://json.extendsclass.com/bin/cd70c6c83bc6",
          //   headers: { "Content-Type": "Application/json", "Security-key": "12345678" },
          //   body: JSON.stringify(result.data),
          // }
          // axios(configPut)
          .then(response => {
            if (response.status === 200) {
              res.status(200).send('ok')
              return
            }
            else {
              res.status(400).send("No Ok")
              return
            }
          })
      })

  },
  registerBD: function (req, res) {
    console.log(req.body);

    const usuarioNuevo = {
      identificacion: req.body.identificacion,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      direccion: req.body.direccion,
      ciudad: req.body.ciudad,
      depto: req.body.depto,
      telefono: req.body.telefono,
      fecha: req.body.fecha,
      password: req.body.password,
      creacion: new Date()
    };

    // Verificar si el usuario ya existe en la base de datos
    connection.query('SELECT * FROM freedb_registross.personas WHERE email = ?', [usuarioNuevo.email], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
        return;
      }

      if (results.length > 0) {
        res.status(400).send('Usuario ya existe en la Base de Datos');
      } else {
        // Insertar el nuevo usuario en la base de datos
        connection.query('INSERT INTO freedb_registross.personas SET ?', usuarioNuevo, (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
          } else {
            console.log('Usuario registrado correctamente en la Base de Datos');
            res.status(200).send('Usuario registrado correctamente');
          }
        });
      }
    });
  },

  login: function (req, res) {
    const { email, password } = req.body;

    // Hacer la solicitud para obtener los datos de usuarios
    axios.get('https://api.jsonbin.io/v3/b/6654d654acd3cb34a84e8a8f', {
      headers: {
        'X-Master-Key': '$2a$10$tXYZjUGhzvUyEAi/f/aE0.4Rk496UQhLjWM6B7cO05xSPwBvOxovK'
      }
    })
      .then(response => {
        const users = response.data.record;

        // Buscar el usuario por email
        const user = users.find(user => user.email === email);

        // Si el usuario no existe
        if (!user) {
          return res.status(404).send("Usuario no encontrado");
        }

        // Verificar la contraseña
        if (user.password !== password) {
          return res.status(401).send("Contraseña incorrecta");
        }

        // Si las credenciales son válidas, enviar respuesta exitosa
        res.status(200).send("Inicio de sesión exitoso");
      })
      .catch(error => {
        console.error("Error al obtener los datos de usuario:", error);
        res.status(500).send("Error interno del servidor");
      });
  }

}

module.exports = controller;