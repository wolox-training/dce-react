import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';

import Form from './index';

const onSubmit = jest.fn();

describe('login form', () => {
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
    fireEvent.input(screen.getByTestId('email'), { target: { value: 'diego.celis@wolox.co' } });
    fireEvent.input(screen.getByTestId('password'), { target: { value: 'Test1234' } });

    expect(screen.getByRole('form')).toHaveFormValues({
      email: 'diego.celis@wolox.co',
      password: 'Test1234'
    });

    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  });
});
