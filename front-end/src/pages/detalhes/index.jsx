import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/StateProvider';
import './style.css';
import ContainerDetalhes from '../../components/containerDetalhes';

function Detalhes() {
  const { data } = useContext(StateContext);

  return (
    <div className="containerDetalhes">
      <div className="total">
        <p className="tituloTotal">
          Total
        </p>
        <p className="quantidadeTotal">
          {data.total}
        </p>
      </div>
      <ContainerDetalhes mensagem="Positiva" quantidade={data.quantidadePositiva} porcentagem={data.porcentagemPositiva} />
      <ContainerDetalhes mensagem="Negativa" quantidade={data.quantidadeNegativa} porcentagem={data.porcentagemNegativa} />
      <ContainerDetalhes mensagem="Não Avaliada" quantidade={data.quantidadeNaoAvaliada} porcentagem={data.porcentagemNaoAvaliada} />
      <Link to="/" className="link">Voltar</Link>
    </div>
  );
}

export default Detalhes;
