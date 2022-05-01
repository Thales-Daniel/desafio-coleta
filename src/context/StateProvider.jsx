import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext({});

export function StateProvider(props) {
  const [Pergunta1, setPergunta1] = useState('');
  const [Pergunta2, setPergunta2] = useState('');
  const [Pergunta3, setPergunta3] = useState('');
  const [Pergunta4, setPergunta4] = useState('');
  // const [verificaPerguntas, setVerificaPerguntas] = useState(true);

  const obj = {
    Pergunta1,
    Pergunta2,
    Pergunta3,
    Pergunta4,
  };

  useEffect(() => {
    // const verificador = Boolean(Pergunta1 && Pergunta2 && Pergunta3 && Pergunta4);

    // if (verificador === true) {
    //   setVerificaPerguntas(false);
    // } else {
    //   setVerificaPerguntas(true);
    // }
  }, [obj, Pergunta1, Pergunta2, Pergunta3, Pergunta4]);

  const context = useMemo(
    () => ({
      setPergunta1,
      setPergunta2,
      setPergunta3,
      setPergunta4,
      Pergunta4,
      Pergunta3,
      Pergunta2,
      Pergunta1,
    }),
    [setPergunta1, setPergunta2, setPergunta3, setPergunta4],
  );

  const { children } = props;

  return (
    <StateContext.Provider value={context}>
      { children }
    </StateContext.Provider>
  );
}

StateProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default StateProvider;
