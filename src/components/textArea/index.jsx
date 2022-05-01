import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function TextArea() {
  const { setCampos, setVerificaCampos } = useContext(StateContext);
  const [tamanho, setTamanho] = useState(0);
  const [valor, setValor] = useState('');

  useEffect(() => {
    setCampos((prevState) => ({ ...prevState, Pergunta4: valor }));
    if (tamanho >= 15 && tamanho <= 200) {
      setVerificaCampos(true);
    }
  }, [valor, setCampos]);

  const contador = (e) => {
    const { value } = e.target;
    setValor(value);
    setTamanho(value.length);
  };

  return (
    <div className="textAreaContainer">
      <p>
        Por favor, justifique a sua resposta anterior
      </p>
      <label htmlFor="textarea" className="textLabel">
        <textarea
          id="textarea"
          placeholder="Digite sua resposta aqui"
          // className={Pergunta4 < 15 ? 'minimun' : 'maximun'}
          minLength={15}
          maxLength={200}
          onChange={(e) => contador(e)}
        />
      </label>
      <small>
        {tamanho}
        /200
      </small>
    </div>
  );
}

TextArea.propTypes = {
  pergunta4: PropTypes.object,
  setPergunta4: PropTypes.func,
}.isRequired;

export default TextArea;
