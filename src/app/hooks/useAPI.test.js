import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { TestHook } from '~utils/tests';
import { ENDPOINTS } from '~constants/api';

import useAPI from './useAPI';

let hookValues = null;

describe('useAPI', () => {
  test('signUp endpoint', async () => {
    render(
      <TestHook
        hook={() => {
          hookValues = useAPI(
            {
              url: ENDPOINTS.signUp,
              method: 'POST',
              data: {
                user: {
                  email: 'esteban.pintos+100@wolox.com.ar',
                  password: '123123123',
                  passwordConfirmation: '123123123',
                  firstName: 'Prueba',
                  lastName: 'Usuario',
                  locale: 'en'
                }
              }
            },
            null,
            true
          );
        }}
      />
    );
    await waitFor(() =>
      expect(hookValues[0].response.data).toStrictEqual({
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ2ZXJpZmljYXRpb25fY29kZSI6Inl5QV9RS0F4eGlCa1pLb0dSeHduc1ljSzhzeWVDYVVlNUw3RHgtNTlqaWgzbm9fa3Rtb0dBenF5ajZrVFVSdGIiLCJyZW5ld19pZCI6IkU4OURTald4clh6TUV4MlNTSmVCLTdtQ1VOaDN4eGhNIiwibWF4aW11bV91c2VmdWxfZGF0ZSI6MTQ4NDE0NjI5OCwiZXhwaXJhdGlvbl9kYXRlIjoxNDgxNzI3MDk4LCJ3YXJuaW5nX2V4cGlyYXRpb25fZGF0ZSI6MTQ4MTU3MjI5OH0.YWdWDTUNSvGjVO8SAe2t4KkenYfwVN5ZuwhIRfXlZXI',
        renewId: 'E89DSjWxrXzMEx2SSJeB-7mCUNh3xxhM'
      })
    );
  });

  test('login endpoint', async () => {
    render(
      <TestHook
        hook={() => {
          hookValues = useAPI(
            {
              url: ENDPOINTS.login,
              method: 'POST',
              data: {
                session: {
                  email: 'test@wolox.com.ar',
                  password: 'mypassword'
                }
              }
            },
            null,
            true
          );
        }}
      />
    );
    await waitFor(() =>
      expect(hookValues[0].response.data).toStrictEqual({
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ2ZXJpZmljYXRpb25fY29kZSI6Inl5QV9RS0F4eGlCa1pLb0dSeHduc1ljSzhzeWVDYVVlNUw3RHgtNTlqaWgzbm9fa3Rtb0dBenF5ajZrVFVSdGIiLCJyZW5ld19pZCI6IkU4OURTald4clh6TUV4MlNTSmVCLTdtQ1VOaDN4eGhNIiwibWF4aW11bV91c2VmdWxfZGF0ZSI6MTQ4NDE0NjI5OCwiZXhwaXJhdGlvbl9kYXRlIjoxNDgxNzI3MDk4LCJ3YXJuaW5nX2V4cGlyYXRpb25fZGF0ZSI6MTQ4MTU3MjI5OH0.YWdWDTUNSvGjVO8SAe2t4KkenYfwVN5ZuwhIRfXlZXI',
        renewId: 'E89DSjWxrXzMEx2SSJeB-7mCUNh3xxhM'
      })
    );
  });
});
