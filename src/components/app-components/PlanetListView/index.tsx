import React, { useState } from 'react';

import './styles.scss';
import Selector from 'components/base-components/Selector';
import PlanetList, { PlanetListSortBy } from '../PlanetList';

const PlanetListView: React.FC = () => {
  const [sortBy, setSortBy] = useState('');

  return (
    <div className="planet-list-view">
      <Selector
        items={PlanetListSortBy}
        value={sortBy}
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
      />
      <PlanetList sortBy={sortBy} />
    </div>
  );
};

export default PlanetListView;
