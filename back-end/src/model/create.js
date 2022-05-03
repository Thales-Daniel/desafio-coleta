const fs = require('fs').promises;

const enviaPerguntas = async (obj) => {
  try {
    const pergutas = JSON.parse(await fs.readFile('./src/data/perguntas.json'));
    pergutas.push(obj);
    await fs.writeFile('./src/data/perguntas.json', JSON.stringify(pergutas));
    console.log(pergutas);
    return pergutas;
  } catch (err) {
    console.log(err);
  }
};

module.exports = enviaPerguntas;
