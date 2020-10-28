import  { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

import { loadStorage } from '~utils/storage';

const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();

const api = create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
    'access-token': loadStorage('accessToken') || '',
    'client': loadStorage('client') || '',
    'uid': loadStorage('uid') || ''
  }
});

api.addResponseTransform(response => {
  if (response.data) {
    response.data = deserializer.serialize(response.data);
  }
  if (response.headers) {
    response.headers = deserializer.serialize(response.headers);
  }
})

api.addRequestTransform(request => {
  if(request.data) {
    request.data = serializer.serialize(request.data);
  }
})

export default api;
