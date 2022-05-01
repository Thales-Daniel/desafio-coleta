import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function TextArea() {
  const { setPergunta4, pergunta4 } = useContext(StateContext);
  const contador = (e) => {
    const { value } = e.target;
    setPergunta4({ value, tamanho: value.length });
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
          className={pergunta4.tamanho < 15 ? 'minimun' : 'maximun'}
          onChange={(e) => contador(e)}
        />
      </label>
      <small>
        {pergunta4.tamanho}
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
