import React from 'react';

function InputRadio() {
  return (
    <div>
      <div>
        Você se considera bom em lógica?
        <label htmlFor="perguntaUmSim">
          <input type="radio" name="first" id="perguntaUmSim" value="Sim" />
          Sim
        </label>
        <label htmlFor="perguntaUmNao">
          <input type="radio" name="first" id="perguntaUmNao" value="Nao" />
          Não
        </label>
      </div>
      <div>
        gosta de aprender com desafios?
        <label htmlFor="perguntaDoisSim">
          <input type="radio" name="second" id="perguntaDoisSim" value="Sim" />
          Sim
        </label>
        <label htmlFor="perguntaDoisNao">
          <input type="radio" name="second" id="perguntaDoisNao" value="Nao" />
          Não
        </label>
      </div>
    </div>
  );
}

export default InputRadio;
