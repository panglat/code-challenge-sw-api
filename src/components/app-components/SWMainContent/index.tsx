import React from 'react';
import PlanetListView from '../PlanetListView';

import './styles.scss';

const SWMainContent: React.FC = () => (
  <section className="sw-main-content layout">
    {' '}
    <PlanetListView />{' '}
  </section>
);

export default SWMainContent;
