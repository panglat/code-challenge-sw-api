import PlanetList from 'components/app-components/PlanetList';
import React from 'react';
import { Provider } from 'react-redux';

import 'index.scss';

interface AppProps {
  store: any;
}

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <PlanetList />
      </div>
    </Provider>
  );
};

export default App;
