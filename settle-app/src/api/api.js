/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const get = (path) => {
  return axios.get(path);
};


const rates = {
  get: () => {
    return get(
      `http://data.fixer.io/api/latest?access_key=ffcc344a3f31700c0020d166fd17ea96`
    );
  },
};

const endpoints = { rates };

const client = {
  endpoints,
};

export default client;
