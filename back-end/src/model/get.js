const fs = require('fs').promises;

const pegaPerguntas = async () => {
  try {
    const pergutas = JSON.parse(await fs.readFile('./src/data/perguntas.json'));
    return pergutas;
  } catch (err) {
    console.log(err);
  }
};

module.exports = pegaPerguntas;
