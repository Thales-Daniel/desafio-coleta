import axios from 'axios';

const enviaRespostas = async (perguntas) => {
  try {
    const postTask = await axios.post('http://localhost:3001/perguntas', { perguntas });
    console.log(postTask.data);
    return postTask.data;
  } catch (err) {
    return err;
  }
};

export default enviaRespostas;
