import React, { useState } from 'react';
import InputRadio from '../input';
import Select from '../select';
import TextArea from '../textArea';

function Form() {
  const [caracter, setCaracter] = useState({ valor: '', tamanho: 0 });

  return (
    <form className="form">
      <InputRadio />
      <Select />
      <TextArea caracter={caracter} setCaracter={setCaracter} />
      <button type="submit" disabled={!(caracter.tamanho >= 15 && caracter.tamanho <= 200)}>Enviar</button>
    </form>
  );
}

export default Form;
