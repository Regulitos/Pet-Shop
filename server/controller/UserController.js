const fs = require('fs').promises;
const path = require('path');

const fs2 = require('fs');
const path2 = require('path');

const userFilePath = path.join(__dirname, '../../src/components/usuariosRegistrados.json');
const userFilePath2 = path2.join(__dirname, '../../src/components/userLoggedIn.json');

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
                ciudad: req.body.ciudad,
                departamento: req.body.depto,
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
        function leerDatos() {
            try {
                const datos = fs2.readFileSync(userFilePath2, 'utf-8');
                return JSON.parse(datos);
            } catch (error) {
                // Si hay un error al leer el archivo, retorna un arreglo vacío
                return [];
            }
        }

        // Función para escribir los datos en el archivo JSON
        function escribirDatos(datos) {
            fs2.writeFileSync(userFilePath2, JSON.stringify(datos, null, 2), 'utf-8');
        }
        try {
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            

            for (x of users) {

                if (x.email === req.body.email && x.password === req.body.password) {

                    
                    const { nombres, apellidos , email} = x;
                    // Leer los datos existentes del archivo JSON
                    const usuarios = leerDatos();
                    // Agregar los nuevos datos al arreglo
                    usuarios.push({ nombres, apellidos , email});
                    // Escribir los datos actualizados en el archivo JSON
                    escribirDatos(usuarios);

                    res.status(200).send("Ok");

                    return;
                }
            }
            res.status(400).send('Error: correo electrónico o contraseña incorrectos');
        } catch (error) {
            console.error('Error al procesar el inicio de sesión:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = controller;