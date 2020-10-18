import { requestStarWarsPlanets } from 'business/StarWars/Planets/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';

const PlanetList: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestStarWarsPlanets());
  }, [dispatch]);

  return <div className="planet-list">Planet List</div>;
};

export default PlanetList;
