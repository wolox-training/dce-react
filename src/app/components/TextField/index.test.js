import React from 'react';
import { render, screen } from '@testing-library/react';

import TextField from './index';

describe('Textfield component', () => {
  test('Textfield renders correctly', () => {
    render(<TextField type="text" name="firstName" title="Nombre" />);

    expect(screen.queryByText('Nombre')).toBeInTheDocument();
    expect(screen.getByRole('textbox').getAttribute('type')).toEqual('text');
    expect(screen.getByRole('textbox').getAttribute('name')).toEqual('firstName');
    expect(screen.getByRole('alert')).toHaveAttribute('class', 'text-error row error hidden');
  });

  test('Textfield show error message', () => {
    render(
      <TextField type="text" name="firstName" title="Nombre" error={{ message: 'this field is required ' }} />
    );

    expect(screen.getByRole('alert')).toHaveAttribute('class', 'text-error row error');
  });
});
