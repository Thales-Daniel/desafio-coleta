import { screen } from '@testing-library/react';
import React from 'react';
import Select from '../../components/select';
import renderWithRouter from '../renderWithRouter';
import '@testing-library/jest-dom';

describe('Renderiza o component select', () => {
  it('verificando se o tem uma tag select e se tem as opções certas', () => {
    renderWithRouter(<Select />);
    const terceiraPergunta = screen.getByText('Gostaria de fazer parte da GRX?');

    expect(terceiraPergunta).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Selecione' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: 'Sim' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Não' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Não sei' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Agora!!' })).toBeInTheDocument();
  });
});
