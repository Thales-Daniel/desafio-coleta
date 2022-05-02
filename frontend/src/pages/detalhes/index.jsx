import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ContainerDetalhes from '../../components/containerDetalhes';

function Detalhes() {
  const obj = {
    total: 50,
    mensagensPositivas: 40,
    mensagensNegativas: 10,
    quantidadeNaoAvaliada: 0,
  };

  return (
    <div className="containerDetalhes">
      <div className="total">
        <p className="tituloTotal">
          Total
        </p>
        <p className="quantidadeTotal">
          {obj.total}
        </p>
      </div>
      <ContainerDetalhes mensagem="Positiva" quantidade={obj.mensagensPositivas} porcentagem={80} />
      <ContainerDetalhes mensagem="Negativa" quantidade={obj.mensagensNegativas} porcentagem={20} />
      <ContainerDetalhes mensagem="Não Avaliada" quantidade={obj.quantidadeNaoAvaliada} porcentagem={0} />
      <Link to="/" className="link">Voltar</Link>
    </div>
  );
}

export default Detalhes;
