import React, { useContext, useEffect } from 'react';
import Buttons from '../../components/buttons';
import Select from '../../components/select';
import TextArea from '../../components/textArea';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Form() {
  const { verificaCampos } = useContext(StateContext);
  useEffect(() => {
    console.log(verificaCampos);
  }, [verificaCampos]);
  const verificaTodosCampos = Object.values(verificaCampos).some((item) => item === false);

  return (
    <form className="form">
      <h1>Desafio Coleta - GRX</h1>
      <Buttons />
      <Select />
      <TextArea />
      <button type="submit" disabled={verificaTodosCampos} className="submitButton">Enviar</button>
    </form>
  );
}

export default Form;
