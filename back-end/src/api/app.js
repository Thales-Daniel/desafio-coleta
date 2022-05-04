const express = require('express');
const cors = require('cors');
const error = require('../middlewares/error');
const routerPerguntas = require('../router/routerPerguntas');

const app = express();

app.use(cors());
app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use('/perguntas', routerPerguntas);

app.use(error);

module.exports = app;
