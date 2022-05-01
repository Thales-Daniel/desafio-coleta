import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Buttons() {
  const { setPergunta1, setPergunta2 } = useContext(StateContext);

  return (
    <div className="buttonContainer">
      <p>
        Você se considera bom em lógica?
      </p>
      <div className="divButtons">
        <button type="button" onClick={() => setPergunta1('Sim')}>Sim</button>
        <button type="button" onClick={() => setPergunta1('Não')}>Não</button>
      </div>
      <p>
        gosta de aprender com desafios?
      </p>
      <div className="divButtons">
        <button type="button" onClick={() => setPergunta2('Sim')}>Sim</button>
        <button type="button" onClick={() => setPergunta2('Não')}>Não</button>
      </div>
    </div>
  );
}

export default Buttons;
