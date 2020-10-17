import React from 'react';
import { render } from '@testing-library/react';
import PlanetList from './';

test('renders learn react link', () => {
  const { getByText } = render(<PlanetList />);
});
