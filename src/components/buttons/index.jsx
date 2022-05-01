import React from 'react';
import './style.css';

function Buttons() {
  return (
    <div className="buttonContainer">
      <p>
        Você se considera bom em lógica?
      </p>
      <div className="divButtons">
        <button type="button">Sim</button>
        <button type="button">Não</button>
      </div>
      <p>
        gosta de aprender com desafios?
      </p>
      <div className="divButtons">
        <button type="button">Sim</button>
        <button type="button">Não</button>
      </div>
    </div>
  );
}

export default Buttons;
