import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Select() {
  const { setCampos, setVerificaCampos } = useContext(StateContext);

  return (
    <div className="selectCampo">
      <p className="titleSelect">
        Gostaria de fazer parte da GRX?
      </p>
      <label htmlFor="respostasSelect">
        <select
          onClick={(e) => {
            setCampos((prevState) => ({ ...prevState, Pergunta3: e.target.value }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta3: true }));
          }}
          id="respostasSelect"
          defaultValue="default"
          data-testid="select"
        >
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
