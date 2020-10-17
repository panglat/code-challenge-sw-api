import {
  STAR_WARS_PLANETS_FETCH_REQUESTED,
  STAR_WARS_PLANETS_FETCH_SUCCEEDED,
  STAR_WARS_PLANETS_FETCH_FAILED,
  StarWarsPlanetActions,
} from './types';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';
import StarWarsAPIArrayResponse from 'models/StarWars/StarWarsAPIResponse';

export function requestStarWarsPlanets(): StarWarsPlanetActions {
  return {
    type: STAR_WARS_PLANETS_FETCH_REQUESTED,
  };
}

export function requestStarWarsPlanetsSuccess(
  response: StarWarsAPIArrayResponse<StarWarsPlanet>
): StarWarsPlanetActions {
  return {
    type: STAR_WARS_PLANETS_FETCH_SUCCEEDED,
    payload: response,
  };
}

export function requestStarWarsPlanetsError(
  error: Error
): StarWarsPlanetActions {
  return {
    type: STAR_WARS_PLANETS_FETCH_FAILED,
    payload: error,
  };
}
