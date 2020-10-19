/**
 * @file Manages user requests.
 * @module services/UserService
 */
import StarWarsAPI from 'api/StarWarsAPI';
import Axios from 'axios';
import StarWarsAPIArrayResponse, {
  StarWarsAPIArrayResponseData,
} from 'models/StarWars/StarWarsAPIResponse';
import StarWarsPlanet, {
  StarWarsPlanetData,
} from 'models/StarWars/StarWarsPlanet';

// eslint-disable-next-line import/prefer-default-export
export const getStarWarsPlanets = async (
  next: string
): Promise<StarWarsAPIArrayResponse<StarWarsPlanet>> => {
  try {
    const axios = next
      ? Axios.get<StarWarsAPIArrayResponseData<StarWarsPlanetData>>(next)
      : StarWarsAPI.get<StarWarsAPIArrayResponseData<StarWarsPlanetData>>(
          'planets'
        );
    const response = await axios;
    const data = response.data;
    const planets = response.data.results.map((p) => new StarWarsPlanet(p));
    const newResponse = { ...data, results: planets };
    return new StarWarsAPIArrayResponse<StarWarsPlanet>(newResponse);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
