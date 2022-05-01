import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Select() {
  const { setPergunta3 } = useContext(StateContext);

  return (
    <div className="selectCampo">
      <p className="titleSelect">
        Gostaria de fazer parte da GRX?
      </p>
      <label htmlFor="respostasSelect">
        <select onClick={(e) => setPergunta3(e.target.value)} id="respostasSelect" defaultValue="default">
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
