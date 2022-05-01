import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../context/StateProvider';
import './style.css';

function Buttons() {
  const {
    campos, setCampos, setVerificaCampos,
  } = useContext(StateContext);

  useEffect(() => {
    console.log(campos);
  }, [campos]);

  return (
    <div className="buttonContainer">
      <p>
        Você se considera bom em lógica?
      </p>
      <div className="divButtons">
        <button
          type="button"
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta1: 'Sim' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta1: true }));
          }}
        >
          Sim

        </button>
        <button
          type="button"
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta1: 'Não' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta1: true }));
          }}
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
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta2: 'Sim' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta2: true }));
          }}
        >
          Sim

        </button>
        <button
          type="button"
          onClick={() => {
            setCampos((prevState) => ({ ...prevState, Pergunta2: 'Não' }));
            setVerificaCampos((prevState) => ({ ...prevState, Pergunta2: true }));
          }}
        >
          Não
        </button>
      </div>
    </div>
  );
}

export default Buttons;
