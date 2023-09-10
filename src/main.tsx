// React.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Styles.
import './reset.css';
import './index.css';
// Components.
import Game from './components/Game';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
);
