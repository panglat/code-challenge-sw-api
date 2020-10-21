import axios, { AxiosInstance } from 'axios';

const StarWarsAPI: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export default StarWarsAPI;
