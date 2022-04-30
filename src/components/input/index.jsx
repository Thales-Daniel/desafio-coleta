import React from 'react';

function InputRadio() {
  return (
    <div className="buttonContainer">
      <div>
        <p>
          Você se considera bom em lógica?
        </p>
        <button type="button">Sim</button>
        <button type="button">Não</button>
      </div>
      <div>
        <p>
          gosta de aprender com desafios?
        </p>
        <button type="button">Sim</button>
        <button type="button">Não</button>
      </div>
    </div>
  );
}

export default InputRadio;
