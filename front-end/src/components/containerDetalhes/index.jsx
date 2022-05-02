import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ContainerDetalhes({ quantidade, mensagem, porcentagem }) {
  return (
    <div className="containerDetalhesComponente">
      <div className="containerPaiMensagens">
        <p className="containerMensagensTitulo">
          {`Quantidade ${mensagem}`}
        </p>

        <p className="containerMensagens">
          {' '}
          {quantidade}
        </p>
      </div>
      <div className="containerPaiMensagens">
        <p className="containerMensagensTitulo">
          %
          {'   '}
          {mensagem}
        </p>
        <p className="containerMensagens">
          {' '}
          {porcentagem}
        </p>
      </div>
    </div>
  );
}

ContainerDetalhes.propTypes = {
  quantidade: PropTypes.number,
  mensagem: PropTypes.string,
  porcentagem: PropTypes.number,
}.isRequired;

export default ContainerDetalhes;
