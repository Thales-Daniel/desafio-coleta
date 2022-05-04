import { screen } from '@testing-library/react';
import React from 'react';
import Form from '../pages/form';

describe('teste', () => {
  it('teste', () => {
    render(<Form />);
    const teste = screen.getByText('Desafio Coleta - GRX');

    expect(teste).toBeInTheDocument();
  });
});
