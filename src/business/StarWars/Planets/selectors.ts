import { RootState } from 'store/rootReducer';

export const getStarWarsPlanets = (state: RootState) => state.planets.planets;
export const getStarWarsPlanetsLoading = (state: RootState) =>
  state.planets.loading;
export const getStarWarsPlanetsError = (state: RootState) =>
  state.planets.error;
export const getStarWarsPlanetsCount = (state: RootState) =>
  state.planets.count;
export const getStarWarsPlanetsNext = (state: RootState) => state.planets.next;
