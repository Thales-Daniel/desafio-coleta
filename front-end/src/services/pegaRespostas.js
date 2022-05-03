import axios from 'axios';

const pegaRespostas = async () => {
  try {
    const pegaDetalhe = await axios.get('http://localhost:3001/perguntas');
    return pegaDetalhe.data;
  } catch (err) {
    return err;
  }
};

export default pegaRespostas;
