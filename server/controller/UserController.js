const fs = require('fs').promises;
const path = require('path');

const userFilePath = path.join(__dirname, '../../src/components/usuariosRegistrados.json');

const controller = {
    register: async function (req, res) {
        try {
            // Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                identificacion: req.body.identificacion,
                nombres: req.body.nombre,
                apellidos: req.body.apellido,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fecha,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creación: new Date()
            };

            for (x of users) {
                if (x.email === req.body.email) {
                    res.status(400).send("El email ya existe")
                    return
                }
            }

            users.push(usuarioNuevo);

            // Escribir el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

            res.status(200).send('Usuario creado con éxito');
        } catch (error) {
            console.error('Error al procesar el registro:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    login: async function (req, res) {
        try {
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            for (x of users) {
                if (x.email === req.body.email && x.password === req.body.password && x.rol === req.body.rol) {
                    res.status(200).send("Ok")
                    return
                }
            }
            res.status(400).send('Error')
        }

        catch (error) {
            console.error('Error al procesar el registro:', error)
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = controller;