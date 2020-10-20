import React from 'react';
import SimpleModal from 'components/base-components/SimpleModal';
import StarWarsPlanet from 'models/StarWars/StarWarsPlanet';

import './styles.scss';
import { replaceNAN } from 'helpers/numbers';

interface PlanetDetailsModalProps {
  onCloseModal: () => void;
  planet: StarWarsPlanet;
}
const PlanetDetailsModal: React.FC<PlanetDetailsModalProps> = ({
  onCloseModal,
  planet,
}) => {
  return (
    <SimpleModal onCloseModal={onCloseModal}>
      <div className="user-details-modal">
        <h2>{`${planet.name}`}</h2>
        <p>
          <b>Diameter:</b> {replaceNAN(planet.diameter, 'unknown')} km
        </p>
        <p>
          <b>Rotation Period:</b> {replaceNAN(planet.rotationPeriod, 'unknown')}{' '}
          hours
        </p>
        <p>
          <b>Orbital Period:</b> {replaceNAN(planet.orbitalPeriod, 'unknown')}{' '}
          days
        </p>
        <p>
          <b>Gravity:</b> {planet.gravity} Gs
        </p>
        <p>
          <b>Population:</b> {replaceNAN(planet.population, 'unknown')}
        </p>
        <p>
          <b>Climate:</b> {planet.climate}
        </p>
        <p>
          <b>Terrain:</b> {planet.terrain}
        </p>
      </div>
    </SimpleModal>
  );
};

export default PlanetDetailsModal;
