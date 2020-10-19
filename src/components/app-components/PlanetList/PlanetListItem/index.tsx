import React from 'react';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';
import { replaceNAN } from 'helpers/numbers';

import './styles.scss';

interface PlanetListItemProps {
  planet: StarWarsPlanet;
  onClick: (planet: StarWarsPlanet) => void;
}

const PlanetListItem: React.FC<PlanetListItemProps> = ({ planet, onClick }) => {
  const { name, diameter, population } = planet;
  return (
    <button className="planet-list-item" onClick={(e) => onClick(planet)}>
      <div className="planet-list-item__user-information">
        <h2 className="planet-list-item__paragraph">Name: {name}</h2>
        <p className="planet-list-item__paragraph">
          Diameter: {replaceNAN(diameter, 'unknown')} km
        </p>
        <p className="planet-list-item__paragraph">
          Population: {replaceNAN(population, 'unknown')}
        </p>
      </div>
    </button>
  );
};

export default PlanetListItem;
