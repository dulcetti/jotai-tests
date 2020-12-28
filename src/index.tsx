import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'jotai';

import './index.css';
import Layout from './components/layout';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
