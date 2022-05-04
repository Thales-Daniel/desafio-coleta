import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Form from '../../pages/form';
import renderWithRouter from '../renderWithRouter';
import '@testing-library/jest-dom';

describe('Renderiza a pagina raiz', () => {
  it('verificando  as primeiras 2 perguntas', () => {
    renderWithRouter(<Form />);
    const primeiraPergunta = screen.getByText('Você se considera bom em lógica?');
    const segundaPergunta = screen.getByText('gosta de aprender com desafios?');
    const botaoSim = screen.getAllByRole('button', { name: 'Sim' });
    const botaoNao = screen.getAllByRole('button', { name: 'Não' });

    expect(primeiraPergunta).toBeInTheDocument();
    expect(segundaPergunta).toBeInTheDocument();
    expect(botaoSim).toHaveLength(2);
    expect(botaoNao).toHaveLength(2);
  });

  it('verificando se o tem uma tag select e se tem as opções certas', () => {
    renderWithRouter(<Form />);
    const terceiraPergunta = screen.getByText('Gostaria de fazer parte da GRX?');

    expect(terceiraPergunta).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Selecione' }).selected).toBe(true);
    expect(screen.getByRole('option', { name: 'Sim' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Não' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Não sei' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Agora!!' })).toBeInTheDocument();
  });

  it('verificando se o tem uma tag textare, a quarta pergunta e um small que é um contador', () => {
    renderWithRouter(<Form />);
    const quartaPergunta = screen.getByText('Por favor, justifique a sua resposta anterior');
    const contador = screen.getByTestId('contador');
    const textArea = screen.getByTestId('textArea');

    expect(quartaPergunta).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(contador).toHaveClass('contadorRed');
  });

  it('verifica se ao preencher o formulario o botão de submit é habilitado novamente', () => {
    renderWithRouter(<Form />);
    const primeiroBotaoSim = screen.getByTestId('primeiroBotaoSim');
    const SegundoBotaoNao = screen.getByTestId('segundoBotaoSim');
    const select = screen.getByTestId('select');
    const submit = screen.getByTestId('botaoSubmit');
    const textArea = screen.getByTestId('textArea');

    expect(submit).toBeDisabled();

    userEvent.click(primeiroBotaoSim);
    userEvent.click(SegundoBotaoNao);
    userEvent.selectOptions(select, 'Sim');
    userEvent.type(textArea, 'Essa frase tem mais de 15 caracteres');
    expect(submit).not.toBeDisabled();
  });
});
