const express = require('express');

const router = express.Router({ mergeParams: true });

const enviaPerguntasController = require('../controller/create');

router.post('/', enviaPerguntasController);

module.exports = router;
