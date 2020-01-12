import axios from "axios";
import routes from "./routes.services";

axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

const instance = axios.create({
  timeout: 2000
});

const createRoute = (serviceMethod, params = null) => {
  return routes[serviceMethod](params);
};

const callbackParser = callback => {
  return callback.status === 200 ? callback.data || true : false;
};

const http = {
  async get(serviceMethod, params) {
    let callback = await instance.get(createRoute(serviceMethod, params));
    return callbackParser(callback);
  },
  async patch(serviceMethod, params) {
    let callback = await instance.patch(createRoute(serviceMethod), params);
    return callbackParser(callback);
  },
  async put(serviceMethod, params) {
    let callback = await instance.put(createRoute(serviceMethod), params);
    return callbackParser(callback);
  },
  async post(serviceMethod, params) {
    let callback = await instance.post(createRoute(serviceMethod), params);
    return callbackParser(callback);
  },
  async delete(serviceMethod, params) {
    let callback = await instance.delete(createRoute(serviceMethod, params));
    return callbackParser(callback);
  }
};

export default http;
