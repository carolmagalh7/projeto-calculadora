const express = require('express');
const rotas = require('./roteadores.js');

const app = express();

app.use(rotas)

app.listen(3000);