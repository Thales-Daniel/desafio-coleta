import React from 'react';
import './style.css';

function Select() {
  return (
    <div className="selectCampo">
      <p className="titleSelect">
        Gostaria de fazer parte da GRX?
      </p>
      <label htmlFor="respostasSelect">
        <select id="respostasSelect" defaultValue="default">
          <option value="default" id="default" disabled>Selecione</option>
          <option>Sim</option>
          <option>Não</option>
          <option>Não sei</option>
          <option>Agora!!</option>
        </select>
      </label>
    </div>
  );
}

export default Select;
