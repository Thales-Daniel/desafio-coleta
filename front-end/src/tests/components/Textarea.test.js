import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import TextArea from '../../components/TextArea';
import renderWithRouter from '../renderWithRouter';
import '@testing-library/jest-dom';

describe('Renderiza o component TextArea', () => {
  it('verificando se o tem uma tag textare a quarta pergunta e um small que é um contador', () => {
    renderWithRouter(<TextArea />);
    const quartaPergunta = screen.getByText('Por favor, justifique a sua resposta anterior');
    const contador = screen.getByTestId('contador');
    const textArea = screen.getByTestId('textArea');

    expect(quartaPergunta).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(contador).toHaveClass('contadorRed');
  });

  it('verificando se o contador troca de classe assim que é digitado mais de 15 caracteres', () => {
    renderWithRouter(<TextArea />);
    const contador = screen.getByTestId('contador');
    const textArea = screen.getByTestId('textArea');

    expect(contador).toHaveClass('contadorRed');

    userEvent.type(textArea, 'essa frase tem mais de 15 caracteres');

    expect(contador).toHaveClass('contador');
  });
});
