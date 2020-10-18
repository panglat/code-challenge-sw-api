import React from 'react';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';

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
        <p className="planet-list-item__paragraph">Diameter: {diameter} km</p>
        <p className="planet-list-item__paragraph">Population: {population}</p>
      </div>
    </button>
  );
};

export default PlanetListItem;
