import {
  STAR_WARS_PLANETS_FETCH_REQUESTED,
  STAR_WARS_PLANETS_FETCH_SUCCEEDED,
  STAR_WARS_PLANETS_FETCH_FAILED,
  StarWarsPlanetActions,
  StarWarsPlanetState,
  STAR_WARS_PLANETS_FETCH_CLEAR,
} from './types';

const initialState: StarWarsPlanetState = {
  loading: false,
  error: null,
  planets: [],
  count: 0,
  next: null,
};

export function StarWarsPlanets(
  state = initialState,
  action: StarWarsPlanetActions
): StarWarsPlanetState {
  switch (action.type) {
    case STAR_WARS_PLANETS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case STAR_WARS_PLANETS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        planets: [...state.planets, ...action.payload.results],
        next: action.payload.next,
        count: action.payload.count,
      };

    case STAR_WARS_PLANETS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case STAR_WARS_PLANETS_FETCH_CLEAR:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
