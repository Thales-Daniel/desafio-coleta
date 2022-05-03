const postPerguntasServices = require('../services/create');

const enviaPerguntas = async (req, res, next) => {
  try {
    const perguntas = req.body;

    const returnoService = await postPerguntasServices(perguntas);

    return res.status(201).json(returnoService);
  } catch (err) {
    next(err);
  }
};

module.exports = enviaPerguntas;
