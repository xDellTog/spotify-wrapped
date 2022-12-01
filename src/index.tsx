import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './theme/normalize.css';
import './theme/custom.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);