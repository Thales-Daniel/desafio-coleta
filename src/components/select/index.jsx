import React from 'react';

function Select() {
  return (
    <div className="campo">
      Gostaria de fazer parte da GRX?
      <label htmlFor="respostasSelect">
        <select id="respostasSelect" required defaultValue="default">
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
