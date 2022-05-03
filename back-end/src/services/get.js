const pegaPerguntasModel = require('../model/get');

const pegaPerguntas = async () => {
  const arrayPerguntas = await pegaPerguntasModel();

  const quantidadeNaoAvaliada = arrayPerguntas
    .reduce((acc, curr) => acc + curr.QuantidadeNaoAvaliada, 0);

  const quantidadePositiva = arrayPerguntas.reduce((acc, curr) => acc + curr.QuantidadePositiva, 0);

  const quantidadeNegativa = arrayPerguntas.reduce((acc, curr) => acc + curr.QuantidadeNegativa, 0);

  const total = quantidadeNaoAvaliada + quantidadeNegativa + quantidadePositiva;

  const porcentagemPositiva = Math.floor((quantidadePositiva * 100) / total);

  const porcentagemNegativa = Math.floor((quantidadeNegativa * 100) / total);

  const porcentagemNaoAvaliada = Math.floor((quantidadeNaoAvaliada * 100) / total);

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
