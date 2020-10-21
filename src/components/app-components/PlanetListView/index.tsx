import React, { useState } from 'react';

import './styles.scss';
import Selector from 'components/base-components/Selector';
import PlanetList, { PlanetListSortBy } from '../PlanetList';

const PlanetListView: React.FC = () => {
  const [sortBy, setSortBy] = useState('');

  return (
    <div className="planet-list-view">
      <h1 className="planet-list-view__main-title">Planets API</h1>
      <p className="planet-list-view__paragraph">
        This is an example of a simple API call. The list can be sorted using
        the selector
      </p>
      <Selector
        className="planet-list-view__selector"
        items={PlanetListSortBy}
        label="Sort by"
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
        value={sortBy}
      />
      <PlanetList className="planet-list-view__list" sortBy={sortBy} />
    </div>
  );
};

export default PlanetListView;
