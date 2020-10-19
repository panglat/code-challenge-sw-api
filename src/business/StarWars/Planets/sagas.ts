import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {
  STAR_WARS_PLANETS_FETCH_REQUESTED,
  StarWarsPlanetActions,
} from './types';
import {
  requestStarWarsPlanetsSuccess,
  requestStarWarsPlanetsError,
} from './actions';
import { getStarWarsPlanets } from 'service/StarWarsService';
import StarWarsAPIArrayResponse from 'models/StarWars/StarWarsAPIResponse';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';
import { getStarWarsPlanetsNext } from './selectors';

function* fetchStarWarsPlanets(action: StarWarsPlanetActions) {
  try {
    const next = yield select(getStarWarsPlanetsNext);
    const result: StarWarsAPIArrayResponse<StarWarsPlanet> = yield call(() =>
      getStarWarsPlanets(next)
    );
    yield put(requestStarWarsPlanetsSuccess(result));
  } catch (e) {
    yield put(requestStarWarsPlanetsError(e));
  }
}

function* watchFetchStarWarsPlanets() {
  yield takeLatest(STAR_WARS_PLANETS_FETCH_REQUESTED, fetchStarWarsPlanets);
}

export default function* sagas() {
  yield all([watchFetchStarWarsPlanets()]);
}
