import { all, spawn } from 'redux-saga/effects';
import startWarsPlanetsSagas from 'business/StarWars/Planets/sagas';

export default function* rootSaga() {
  yield all([startWarsPlanetsSagas].map(spawn));
}
