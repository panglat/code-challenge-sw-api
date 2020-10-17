import { combineReducers } from 'redux';
import { StarWarsPlanets } from 'business/StarWar/Planets/reducer';

const rootReducer = combineReducers({
  planets: StarWarsPlanets,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
