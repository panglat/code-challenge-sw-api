import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStarWarsPlanets } from 'business/StarWars/Planets/actions';
import {
  getStarWarsPlanets,
  getStarWarsPlanetsError,
  getStarWarsPlanetsLoading,
} from 'business/StarWars/Planets/selectors';
import PlanetListItem from './PlanetListItem';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';
import LoadingSpinner from 'components/base-components/LoadingSpinner';

import './styles.scss';
const PlanetList: React.FC = () => {
  const dispatch = useDispatch();
  const planets = useSelector(getStarWarsPlanets);
  const isFetchingData = useSelector(getStarWarsPlanetsLoading);
  const dataFetchFailed = useSelector(getStarWarsPlanetsError);

  useEffect(() => {
    dispatch(requestStarWarsPlanets());
  }, [dispatch]);

  const onItemClick = (planet: StarWarsPlanet) => {
    console.log(planet);
  };

  return (
    <div className="planet-list">
      <div className="planet-list__container">
        {planets &&
          planets.map((planet) => (
            <PlanetListItem
              key={`${planet.name}-${planet.diameter}-${planet.population}`}
              onClick={onItemClick}
              planet={planet}
            />
          ))}
      </div>
      {isFetchingData && (
        <div className="planet-list__loading-message">
          <LoadingSpinner />
          <span>Fetching users</span>
        </div>
      )}
      {!isFetchingData && dataFetchFailed && (
        <div className="planet-list__failed-message">Planets fetch failed</div>
      )}
    </div>
  );
};

export default PlanetList;
