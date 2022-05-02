import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/buttons';
import Select from '../../components/select';
import TextArea from '../../components/textArea';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Form() {
  const [redireciona, setRediciona] = useState(false);
  const { verificaCampos, setCampos, setVerificaCampos } = useContext(StateContext);
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
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
    return navigate('/customer');
  }, [verificaCampos, redireciona]);

  const verificaTodosCampos = Object.values(verificaCampos).some((item) => item === false);

  return (
    <form className="form" onSubmit={Submit}>
      <h1>Desafio Coleta - GRX</h1>
      <Buttons />
      <Select />
      <TextArea />
      <button type="submit" disabled={verificaTodosCampos} className="submitButton">Enviar</button>
    </form>
  );
}

export default Form;
