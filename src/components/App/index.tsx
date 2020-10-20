import PlanetListView from 'components/app-components/PlanetListView';
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
        <PlanetListView />
      </div>
    </Provider>
  );
};

export default App;
