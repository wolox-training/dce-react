import React from 'react';
import { render, screen } from '@testing-library/react';

import TextField from './index';

test('Textfield renders correctly', () => {
  render(<TextField type="text" name="firstName" title="Nombre" />);

  expect(screen.getAllByText('Nombre').length).toEqual(1);
  expect(screen.getByRole('textbox').getAttribute('type')).toEqual('text');
});
