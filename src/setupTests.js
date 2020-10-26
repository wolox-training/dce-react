import '@testing-library/jest-dom/extend-expect';

import { server } from './mocks/servers';

beforeAll(() => {
  process.env = Object.assign(process.env, {
    REACT_APP_BACKEND_URL: 'https://private-anon-3d5bee2ac8-wbooksapi.apiary-mock.com/api/v1'
  });
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock('i18next', () => ({
  t: () => ''
}));
