
var bodyParser = require('body-parser');
// Exportamos en variables express y body-parser, mongoose
const express = require('express');
const api = require('./routes')

var app = express();
// Hacemos la petición con express y utilizamos body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app;