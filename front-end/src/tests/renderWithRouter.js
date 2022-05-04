import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateProvider } from '../context/StateProvider';

const renderWithRouter = (component, { route = '/' } = {}) => ({
  ...render(
    <MemoryRouter initialEntries={[route]}>
      <StateProvider>
        {component}
      </StateProvider>
    </MemoryRouter>,
  ),
});

export default renderWithRouter;
