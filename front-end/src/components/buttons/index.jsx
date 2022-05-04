import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Buttons() {
  const {
    campos, setCampos, setVerificaCampos,
  } = useContext(StateContext);

  useEffect(() => {}, [campos]);

  return (
    <div className="buttonContainer">
      <p>
        Você se considera bom em lógica?
      </p>
      <div className="divButtons">
        <button
          type="button"
          className={campos.Pergunta1 === 'Sim' ? 'botaoSim' : 'botaoComponent'}
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta1: 'Sim' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta1: true }));
          }}
          data-testid="primeiroBotaoSim"
        >
          Sim

        </button>
        <button
          className={campos.Pergunta1 === 'Não' ? 'botaoNao' : 'botaoComponent'}
          type="button"
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta1: 'Não' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta1: true }));
          }}
          data-testid="primeiroBotaoNao"
        >
          Não

        </button>
      </div>
      <p>
        gosta de aprender com desafios?
      </p>
      <div className="divButtons">
        <button
          type="button"
          className={campos.Pergunta2 === 'Sim' ? 'botaoSim' : 'botaoComponent'}
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta2: 'Sim' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta2: true }));
          }}
          data-testid="segundoBotaoSim"
        >
          Sim

        </button>
        <button
          type="button"
          className={campos.Pergunta2 === 'Não' ? 'botaoNao' : 'botaoComponent'}
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta2: 'Não' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta2: true }));
          }}
          data-testid="segundoBotaoNao"
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default Buttons;
