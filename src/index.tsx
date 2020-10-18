import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { store } from 'store';

import 'index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
