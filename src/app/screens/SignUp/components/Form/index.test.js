import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './index';

test('test handleSubmit', async () => {
  const onSubmit = jest.fn();
  render(<Form onSubmit={onSubmit} />);

  fireEvent.submit(screen.getByRole('form'));

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(0));

  userEvent.type(screen.getByTestId('firstName'), 'Diego');
  userEvent.type(screen.getByTestId('lastName'), 'Celis');
  userEvent.type(screen.getByTestId('email'), 'diego.celis@wolox.co');
  userEvent.type(screen.getByTestId('password'), 'Test1234');
  userEvent.type(screen.getByTestId('confirmPassword'), 'Test1234');

  expect(screen.getByRole('form')).toHaveFormValues({
    firstName: 'Diego',
    lastName: 'Celis',
    email: 'diego.celis@wolox.co',
    password: 'Test1234',
    confirmPassword: 'Test1234'
  });

  fireEvent.submit(screen.getByRole('form'));

  await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
});
