const enviaPerguntasModel = require('../model/create');

const enviaPerguntas = async (perguntas) => {
  const quantidadeRespostas = {
    ...perguntas,
    QuantidadePositiva: 0,
    QuantidadeNegativa: 0,
    QuantidadeNaoAvaliada: 0,
  };

  Object.values(perguntas).forEach((resposta) => {
    if (resposta === 'Sim') quantidadeRespostas.QuantidadePositiva += 1;
    if (resposta === 'Agora!!') quantidadeRespostas.QuantidadePositiva += 2;
    if (resposta === 'Não') quantidadeRespostas.QuantidadeNegativa += 1;
    if (resposta === 'Não sei') quantidadeRespostas.QuantidadeNaoAvaliada += 1;
  });

  await enviaPerguntasModel(quantidadeRespostas);
  return quantidadeRespostas;
};

module.exports = enviaPerguntas;
