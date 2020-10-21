import React from 'react';
import { Provider } from 'react-redux';

import 'index.scss';
import SWHeader from 'components/app-components/SWHeader';
import SWMainContent from 'components/app-components/SWMainContent';

interface AppProps {
  store: any;
}

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <SWHeader />
      <SWMainContent />
    </Provider>
  );
};

export default App;
