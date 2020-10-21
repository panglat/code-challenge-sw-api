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
import cn from 'classnames';
import { ClassValue } from 'classnames/types';

import './styles.scss';
import PlanetDetailsModal from '../PlanetDetailsModal';

export enum PlanetListSortBy {
  noSort = 'No sort',
  sortByNameAsc = 'Name (Asc)',
  sortByNameDesc = 'Name (Desc)',
  sortByPopulationAsc = 'Population (Asc)',
  sortByPopulationDesc = 'Population (Desc)',
}

interface PlanetListProps {
  className?: ClassValue;
  sortBy?: string;
}

const PlanetList: React.FC<PlanetListProps> = ({ className, sortBy }) => {
  const dispatch = useDispatch();
  const planets = useSelector(getStarWarsPlanets);
  const isFetchingData = useSelector(getStarWarsPlanetsLoading);
  const dataFetchFailed = useSelector(getStarWarsPlanetsError);
  const dataNext = useSelector(getStarWarsPlanetsNext);
  const [sortedPlanets, setSortedPlanets] = useState<StarWarsPlanet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<StarWarsPlanet | null>();

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
    setSelectedPlanet(planet);
  };

  return (
    <div className={cn('planet-list', className)}>
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
        <Button
          className="planet-list__more-button"
          onClick={() => dispatch(requestStarWarsPlanets())}
        >
          Get more planets
        </Button>
      )}
      {!isFetchingData && !dataNext && (
        <div className="planet-list__message">End of list</div>
      )}
      {selectedPlanet && (
        <PlanetDetailsModal
          onCloseModal={() => {
            setSelectedPlanet(null);
          }}
          planet={selectedPlanet}
        />
      )}
    </div>
  );
};

export default PlanetList;
