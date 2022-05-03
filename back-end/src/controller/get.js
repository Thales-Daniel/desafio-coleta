const pegaPerguntasServices = require('../services/get');

const pegaPerguntas = async (req, res, next) => {
  try {
    const returnoService = await pegaPerguntasServices();

    return res.status(200).json(returnoService);
  } catch (err) {
    next(err);
  }
};

module.exports = pegaPerguntas;
