const enviaPerguntasModel = require('../model/create');

const enviaPerguntas = async (perguntas) => {
  await enviaPerguntasModel(perguntas);
  return perguntas;
};

module.exports = enviaPerguntas;
