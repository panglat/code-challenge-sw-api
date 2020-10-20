import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestStarWarsPlanets } from 'business/StarWars/Planets/actions';
import {
  getStarWarsPlanets,
  getStarWarsPlanetsError,
  getStarWarsPlanetsLoading,
  getStarWarsPlanetsNext,
} from 'business/StarWars/Planets/selectors';
import PlanetListItem from './PlanetListItem';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';
import LoadingSpinner from 'components/base-components/LoadingSpinner';
import Button from 'components/base-components/Button';

import './styles.scss';

export enum PlanetListSortBy {
  noSort = 'No sort',
  sortByNameAsc = 'Name (Asc)',
  sortByNameDesc = 'Name (Desc)',
  sortByPopulationAsc = 'Population (Asc)',
  sortByPopulationDesc = 'Population (Desc)',
}

interface PlanetListProps {
  sortBy?: string;
}

const PlanetList: React.FC<PlanetListProps> = ({ sortBy }) => {
  const dispatch = useDispatch();
  const planets = useSelector(getStarWarsPlanets);
  const isFetchingData = useSelector(getStarWarsPlanetsLoading);
  const dataFetchFailed = useSelector(getStarWarsPlanetsError);
  const dataNext = useSelector(getStarWarsPlanetsNext);
  const [sortedPlanets, setSortedPlanets] = useState<StarWarsPlanet[]>([]);

  const handleScroll = (event: any) => {
    /*
    if (current.offsetHeight + current.scrollTop !== current.scrollHeight) {
      console.log(current.offsetHeight, current.scrollTop, current.offsetHeight + current.scrollTop, current.scrollHeight)
      // The user has not reached the bottom of the list
      return;
    }
    reached();*/
    console.log('Este loguea');
  };

  useEffect(() => {
    dispatch(requestStarWarsPlanets());
  }, [dispatch]);

  useEffect(() => {
    switch (
      PlanetListSortBy[(sortBy as unknown) as keyof typeof PlanetListSortBy]
    ) {
      case PlanetListSortBy.sortByNameDesc:
        setSortedPlanets(
          [...planets].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
          )
        );
        break;
      case PlanetListSortBy.sortByNameAsc:
        setSortedPlanets(
          [...planets].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          )
        );
        break;
      case PlanetListSortBy.sortByPopulationAsc:
        setSortedPlanets(
          [...planets].sort((a, b) => (a.population > b.population ? -1 : 1))
        );
        break;
      case PlanetListSortBy.sortByPopulationDesc:
        setSortedPlanets(
          [...planets].sort((a, b) => (a.population > b.population ? 1 : -1))
        );
        break;
      default:
        setSortedPlanets(planets);
    }
  }, [planets, sortBy]);

  const onItemClick = (planet: StarWarsPlanet) => {
    console.log(planet);
  };

  return (
    <div className="planet-list" onScroll={handleScroll}>
      <div className="planet-list__container">
        {sortedPlanets.map((planet) => (
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
          <span>Fetching Planets</span>
        </div>
      )}
      {!isFetchingData && dataFetchFailed && (
        <div className="planet-list__failed-message">Planets fetch failed</div>
      )}
      {!isFetchingData && dataNext && (
        <Button onClick={() => dispatch(requestStarWarsPlanets())}>
          Get more planets
        </Button>
      )}
    </div>
  );
};

export default PlanetList;
