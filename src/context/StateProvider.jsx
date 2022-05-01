import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext({});

export function StateProvider(props) {
  const [campos, setCampos] = useState({
    Pergunta1: '',
    Pergunta2: '',
    Pergunta3: '',
    Pergunta4: '',
  });

  const [verificaCampos, setVerificaCampos] = useState({
    Pergunta1: false,
    Pergunta2: false,
    Pergunta3: false,
    Pergunta4: false,
  });

  const context = useMemo(
    () => ({
      campos,
      setCampos,
      verificaCampos,
      setVerificaCampos,
    }),
    [campos, setCampos, verificaCampos, setVerificaCampos],
  );

  useEffect(() => {
  }, [context, campos]);

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
