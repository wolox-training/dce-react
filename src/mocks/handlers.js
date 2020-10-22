import { rest } from 'msw';

const success = 201;

export const handlers = [
  rest.post(`${process.env.REACT_APP_BACKEND_URL}/users`, (req, res, ctx) =>
    res(
      ctx.status(success),
      ctx.json({
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJ2ZXJpZmljYXRpb25fY29kZSI6Inl5QV9RS0F4eGlCa1pLb0dSeHduc1ljSzhzeWVDYVVlNUw3RHgtNTlqaWgzbm9fa3Rtb0dBenF5ajZrVFVSdGIiLCJyZW5ld19pZCI6IkU4OURTald4clh6TUV4MlNTSmVCLTdtQ1VOaDN4eGhNIiwibWF4aW11bV91c2VmdWxfZGF0ZSI6MTQ4NDE0NjI5OCwiZXhwaXJhdGlvbl9kYXRlIjoxNDgxNzI3MDk4LCJ3YXJuaW5nX2V4cGlyYXRpb25fZGF0ZSI6MTQ4MTU3MjI5OH0.YWdWDTUNSvGjVO8SAe2t4KkenYfwVN5ZuwhIRfXlZXI',
        renewId: 'E89DSjWxrXzMEx2SSJeB-7mCUNh3xxhM'
      })
    )
  )
];
