import React, {
  createContext, useEffect, useMemo, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import pegaRespostas from '../services/pegaRespostas';

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

  const [data, setData] = useState({});

  const respostas = useCallback(async () => {
    const resolve = await pegaRespostas();
    setData(resolve);
  });

  useEffect(() => {
    respostas();
  }, []);

  const context = useMemo(
    () => ({
      campos,
      setCampos,
      verificaCampos,
      setVerificaCampos,
      data,
    }),
    [campos, setCampos, verificaCampos, setVerificaCampos, data, respostas],
  );

  useEffect(() => {
  }, [context, campos, data]);

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
