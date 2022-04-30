import React, { useState } from 'react';

function TextArea() {
  const [caracter, setCaracter] = useState(0);

  const contador = (e) => {
    const value = e.target.value.length;
    setCaracter(value);
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
          className={caracter < 15 ? 'minimun' : 'maximun'}
          onChange={(e) => contador(e)}
        />
      </label>
      <small>
        {caracter}
      </small>
    </div>
  );
}

export default TextArea;
