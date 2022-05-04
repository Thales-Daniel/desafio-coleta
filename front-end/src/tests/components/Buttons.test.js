import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import Buttons from '../../components/buttons';
import renderWithRouter from '../renderWithRouter';
import '@testing-library/jest-dom';

describe('Renderizando o componente Botões', () => {
  it('verificando se existem 2 perguntas e 2 botões no componente', () => {
    renderWithRouter(<Buttons />);
    const primeiraPergunta = screen.getByText('Você se considera bom em lógica?');
    const segundaPergunta = screen.getByText('gosta de aprender com desafios?');
    const botaoSim = screen.getAllByRole('button', { name: 'Sim' });
    const botaoNao = screen.getAllByRole('button', { name: 'Não' });

    expect(primeiraPergunta).toBeInTheDocument();
    expect(segundaPergunta).toBeInTheDocument();
    expect(botaoSim).toHaveLength(2);
    expect(botaoNao).toHaveLength(2);
  });

  it('Verifica se ao clicar nos botões da primeira pergunta, as cores dos botões mudam', () => {
    renderWithRouter(<Buttons />);
    const primeiroBotaoSim = screen.getAllByRole('button', { name: 'Sim' })[0];
    const primeiroBotaoNao = screen.getAllByRole('button', { name: 'Não' })[0];

    userEvent.click(primeiroBotaoSim);
    expect(primeiroBotaoSim).toHaveClass('botaoSim');
    expect(primeiroBotaoNao).toHaveClass('botaoComponent');

    userEvent.click(primeiroBotaoNao);

    expect(primeiroBotaoNao).toHaveClass('botaoNao');
    expect(primeiroBotaoSim).toHaveClass('botaoComponent');
  });

  it('Verifica se ao clicar nos botões da segunda pergunta, as cores dos botões mudam', () => {
    renderWithRouter(<Buttons />);
    const segundoBotaoSim = screen.getAllByRole('button', { name: 'Sim' })[1];
    const segundoBotaoNao = screen.getAllByRole('button', { name: 'Não' })[1];

    userEvent.click(segundoBotaoSim);

    expect(segundoBotaoSim).toHaveClass('botaoSim');
    expect(segundoBotaoNao).toHaveClass('botaoComponent');

    userEvent.click(segundoBotaoNao);

    expect(segundoBotaoNao).toHaveClass('botaoNao');
    expect(segundoBotaoSim).toHaveClass('botaoComponent');
  });
});
