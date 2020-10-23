import  { create } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';

const deserializer = new CamelcaseSerializer();
const serializer = new SnakecaseSerializer();

const api = create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
});

api.addResponseTransform(response => {
  if (response.data) {
    response.data = deserializer.serialize(response.data);
  }
})

api.addRequestTransform(request => {
  if(request.data) {
    request.data = serializer.serialize(request.data);
  }
})

export default api;
