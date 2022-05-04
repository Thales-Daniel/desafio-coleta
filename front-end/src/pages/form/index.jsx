import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/buttons';
import Select from '../../components/select';
import TextArea from '../../components/TextArea';
import { StateContext } from '../../context/StateProvider';
import enviaRespostas from '../../services/enviaPerguntas';
import './style.css';

function Form() {
  const [redireciona, setRediciona] = useState(false);
  const {
    verificaCampos, setCampos, setVerificaCampos, campos,
  } = useContext(StateContext);

  const navigate = useNavigate();

  const Submit = async () => {
    enviaRespostas(campos);
    setCampos({
      Pergunta1: '',
      Pergunta2: '',
      Pergunta3: '',
      Pergunta4: '',
    });
    setVerificaCampos({
      Pergunta1: false,
      Pergunta2: false,
      Pergunta3: false,
      Pergunta4: false,
    });

    setRediciona(true);
  };

  useEffect(() => {
    if (!redireciona) {
      return undefined;
    }
    return navigate('/detalhes');
  }, [verificaCampos, redireciona]);

  const verificaTodosCampos = Object.values(verificaCampos).some((item) => item === false);

  return (
    <form className="form" onSubmit={Submit}>
      <h1>Desafio Coleta - GRX</h1>
      <Buttons />
      <Select />
      <TextArea />
      <button type="submit" disabled={verificaTodosCampos} className="submitButton" data-testid="botaoSubmit">Enviar</button>
    </form>
  );
}

export default Form;
