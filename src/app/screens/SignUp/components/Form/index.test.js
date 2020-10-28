import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';

import Form from './index';

const onSubmit = jest.fn();

describe('signout form', () => {
  beforeEach(() => {
    render(<Form onSubmit={onSubmit} />);
  });

  test('display required error', async () => {
    screen
      .getAllByRole('alert')
      .map(element => expect(element).toHaveAttribute('class', 'text-error row error hidden'));

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() =>
      screen
        .getAllByRole('alert') //  eslint-disable-next-line
        .map(element => expect(element).toHaveAttribute('class', 'text-error row error'))
    );
  });

  test('dont allowed to submit when form is empty', async () => {
    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  test('submit the form correctly', async () => {
    fireEvent.input(screen.getByTestId('firstName'), { target: { value: 'Diego' } });
    fireEvent.input(screen.getByTestId('lastName'), { target: { value: 'Celis' } });
    fireEvent.input(screen.getByTestId('email'), { target: { value: 'diego.celis@wolox.co' } });
    fireEvent.input(screen.getByTestId('password'), { target: { value: 'Test1234' } });
    fireEvent.input(screen.getByTestId('confirmPassword'), { target: { value: 'Test1234' } });

    expect(screen.getByRole('form')).toHaveFormValues({
      firstName: 'Diego',
      lastName: 'Celis',
      email: 'diego.celis@wolox.co',
      password: 'Test1234',
      confirmPassword: 'Test1234'
    });

    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  });
});
