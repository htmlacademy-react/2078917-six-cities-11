import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const OFFERS_NUMBER = 3;

root.render(
  <React.StrictMode>
    <App offersNumber={OFFERS_NUMBER}/>
  </React.StrictMode>,
);
