const express = require('express');
require('dotenv').config();
const error = require('../middlewares/error');

const app = express();

app.use(express.json());

app.use(error);

module.exports = app;
