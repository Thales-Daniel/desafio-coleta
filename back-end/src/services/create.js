const enviaPerguntasModel = require('../model/create');

const enviaPerguntas = async (perguntas) => {
  const quantidadeRespostas = {
    ...perguntas,
    QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  };

  Object.values(perguntas).forEach((item) => {
    if (item === 'Sim') quantidadeRespostas.QuantidadePositiva += 1;
    if (item === 'Agora!!') quantidadeRespostas.QuantidadePositiva += 2;
    if (item === 'Não') quantidadeRespostas.QuantidadeNegativa += 1;
    if (item === 'Não sei') quantidadeRespostas.QuantidadeNaoAvaliada += 1;
  });

  await enviaPerguntasModel(quantidadeRespostas);
  return quantidadeRespostas;
};

module.exports = enviaPerguntas;
