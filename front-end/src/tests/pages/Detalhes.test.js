import { screen } from '@testing-library/react';
import React from 'react';
import Detalhes from '../../pages/detalhes';
import renderWithRouter from '../renderWithRouter';
import '@testing-library/jest-dom';

describe('Renderiza a pagina de detalhes', () => {
  it('verificando se a pagina de detalhes tem os campos certos', () => {
    renderWithRouter(<Detalhes />);
    const total = screen.getByText('Total');
    const quantidadePositiva = screen.getByText('Quantidade Positiva');
    const porcentagemPositiva = screen.getByText('% Positiva');
    const quantidadeNegativa = screen.getByText('Quantidade Negativa');
    const porcentagemNegativa = screen.getByText('% Negativa');
    const quantidadeNaoAvaliada = screen.getByText('Quantidade Não Avaliada');
    const porcentagemNaoAvaliada = screen.getByText('% Não Avaliada');

    expect(total).toBeInTheDocument();
    expect(quantidadePositiva).toBeInTheDocument();
    expect(porcentagemPositiva).toBeInTheDocument();
    expect(quantidadeNegativa).toBeInTheDocument();
    expect(porcentagemNegativa).toBeInTheDocument();
    expect(quantidadeNaoAvaliada).toBeInTheDocument();
    expect(porcentagemNaoAvaliada).toBeInTheDocument();
  });
});
