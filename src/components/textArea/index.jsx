import React from 'react';
import PropTypes from 'prop-types';

function TextArea({ caracter, setCaracter }) {
  const contador = (e) => {
    const { value } = e.target;
    setCaracter({ value, tamanho: value.length });
  };

  return (
    <div>
      <label htmlFor="textarea">
        Por favor, justifique a sua resposta anterior
        <textarea
          id="textarea"
          name="w3review"
          rows="4"
          cols="50"
          placeholder="Digite sua resposta aqui"
          className={caracter.tamanho < 15 ? 'minimun' : 'maximun'}
          onChange={(e) => contador(e)}
        />
      </label>
      <small>
        {caracter.tamanho}
      </small>
    </div>
  );
}

TextArea.propTypes = {
  caracter: PropTypes.object,
  setCaracter: PropTypes.func,
}.isRequired;

export default TextArea;
