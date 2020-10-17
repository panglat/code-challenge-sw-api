import StarWarsAPIArrayResponse from 'models/StarWars/StarWarsAPIResponse';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';

export const STAR_WARS_PLANETS_FETCH_REQUESTED =
  'STAR_WARS_PLANETS_FETCH_REQUESTED';
export const STAR_WARS_PLANETS_FETCH_SUCCEEDED =
  'STAR_WARS_PLANETS_FETCH_SUCCEEDED';
export const STAR_WARS_PLANETS_FETCH_FAILED = 'STAR_WARS_PLANETS_FETCH_FAILED';
export const STAR_WARS_PLANETS_FETCH_CLEAR = 'STAR_WARS_PLANETS_FETCH_CLEAR';

export interface StarWarsPlanetsFetchRequestedAction {
  type: typeof STAR_WARS_PLANETS_FETCH_REQUESTED;
}

interface StarWarsPlanetsFetchSucceededAction {
  type: typeof STAR_WARS_PLANETS_FETCH_SUCCEEDED;
  payload: StarWarsAPIArrayResponse<StarWarsPlanet>;
}

interface StarWarsPlanetsFetchFailedAction {
  type: typeof STAR_WARS_PLANETS_FETCH_FAILED;
  payload: Error;
}

export interface StarWarsPlanetsFetchClearAction {
  type: typeof STAR_WARS_PLANETS_FETCH_CLEAR;
}

export type StarWarsPlanetActions =
  | StarWarsPlanetsFetchRequestedAction
  | StarWarsPlanetsFetchSucceededAction
  | StarWarsPlanetsFetchFailedAction
  | StarWarsPlanetsFetchClearAction;

export interface StarWarsPlanetState {
  planets: Array<StarWarsPlanet>;
  loading: boolean;
  error: Error | null;
  count: number;
  next: string | null;
}
