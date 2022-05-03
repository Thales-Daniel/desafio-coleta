const express = require('express');
const error = require('../middlewares/error');
const routerPerguntas = require('../router/routerPerguntas');

const app = express();

app.use(express.json());

app.use('/perguntas', routerPerguntas);

app.use(error);

module.exports = app;
