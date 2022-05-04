const pegaPerguntasModel = require('../model/get');

const pegaPerguntas = async () => {
  const arrayPerguntas = await pegaPerguntasModel();

  const quantidadeNaoAvaliada = arrayPerguntas
    .reduce((acc, curr) => acc + curr.QuantidadeNaoAvaliada, 0);

  const quantidadePositiva = arrayPerguntas.reduce((acc, curr) => acc + curr.QuantidadePositiva, 0);

  const quantidadeNegativa = arrayPerguntas.reduce((acc, curr) => acc + curr.QuantidadeNegativa, 0);

  const total = quantidadeNaoAvaliada + quantidadeNegativa + quantidadePositiva;

  const porcentagemPositiva = ((quantidadePositiva * 100) / total).toFixed(2);

  const porcentagemNegativa = ((quantidadeNegativa * 100) / total).toFixed(2);

  const porcentagemNaoAvaliada = ((quantidadeNaoAvaliada * 100) / total).toFixed(2);

  const dataPerguntas = {
    total,
    quantidadePositiva,
    porcentagemPositiva,
    quantidadeNegativa,
    porcentagemNegativa,
    quantidadeNaoAvaliada,
    porcentagemNaoAvaliada,
  };

  return dataPerguntas;
};

module.exports = pegaPerguntas;
