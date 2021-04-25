import axios from 'axios';
import {BASE_URL} from './Constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 20 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
const ServiceCaller = {
  GET: (endPoint, params) => {
    return new Promise((resolve, reject) => {
      return axiosInstance
        .get(endPoint, {params})
        .then(response => {
          const {data} = response;
          resolve(data);
        })
        .catch(error => {
          const {message} = error;
          reject(message);
        });
    });
  },
};

export default ServiceCaller;
