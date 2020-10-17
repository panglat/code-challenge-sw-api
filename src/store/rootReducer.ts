import { combineReducers } from 'redux';
import { StarWarsPlanets } from 'business/StarWars/Planets/reducer';

const rootReducer = combineReducers({
  planets: StarWarsPlanets,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
