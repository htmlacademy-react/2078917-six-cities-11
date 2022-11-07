import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  offersNumber: 3,
} as const;

root.render(
  <React.StrictMode>
    <App offersNumber = {Setting.offersNumber}/>
  </React.StrictMode>,
);
