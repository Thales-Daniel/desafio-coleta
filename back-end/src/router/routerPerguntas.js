const express = require('express');

const router = express.Router({ mergeParams: true });

const enviaPerguntasController = require('../controller/create');
const pegaPerguntasController = require('../controller/get');

router.post('/', enviaPerguntasController);
router.get('/', pegaPerguntasController);

module.exports = router;
