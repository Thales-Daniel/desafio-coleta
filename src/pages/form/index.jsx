import React from 'react';
import InputRadio from '../../components/buttons';
import Select from '../../components/select';
import TextArea from '../../components/textArea';
import './style.css';

function Form() {
  return (
    <form className="form">
      <h1>Desafio Coleta - GRX</h1>
      <InputRadio />
      <Select />
      <TextArea />
      <button type="submit" className="submitButton">Enviar</button>
      {/* disabled={!(caracter.tamanho >= 15 && caracter.tamanho <= 200)} */}
    </form>
  );
}

export default Form;
