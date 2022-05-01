import React, { useState } from 'react';
import InputRadio from '../buttons';
import Select from '../select';
import TextArea from '../textArea';
import './style.css';

function Form() {
  const [caracter, setCaracter] = useState({ valor: '', tamanho: 0 });

  return (
    <form className="form">
      <h1>Desafio Coleta - GRX</h1>
      <InputRadio />
      <Select />
      <TextArea caracter={caracter} setCaracter={setCaracter} />
      <button type="submit" disabled={!(caracter.tamanho >= 15 && caracter.tamanho <= 200)} className="submitButton">Enviar</button>
    </form>
  );
}

export default Form;
