// Declaramos que vamos a utilizar ECMAS6
'use strict'
const mongoose = require('mongoose');
const app = require('./app')


// Conexión de la BBDD con el ORM, establecemos la base de datos, dirección, puerto y nombre de la BBDD
mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar en la BBDD: ${err}`)
    }
    console.log('Base de Datos Conectada!!!')

    // Llamada al servidor función arrow declaramos puerto y verificamos el server.
    app.listen(8080, () => {
        console.log('API REST corriendo en localhost://8080')
    })
})

