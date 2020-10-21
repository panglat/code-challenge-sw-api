import axios, { AxiosInstance } from 'axios';

const StarWarsAPI: AxiosInstance = axios.create({
  baseURL: 'http://swapi.dev/api/',
});

export default StarWarsAPI;
