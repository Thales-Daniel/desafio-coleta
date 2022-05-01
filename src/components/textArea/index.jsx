import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TextArea({ caracter, setCaracter }) {
  const contador = (e) => {
    const { value } = e.target;
    setCaracter({ value, tamanho: value.length });
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
          className={caracter.tamanho < 15 ? 'minimun' : 'maximun'}
          onChange={(e) => contador(e)}
        />
      </label>
      <small>
        {caracter.tamanho}
        /200
      </small>
    </div>
  );
}

TextArea.propTypes = {
  caracter: PropTypes.object,
  setCaracter: PropTypes.func,
}.isRequired;

export default TextArea;
