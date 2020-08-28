import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextControler } from './context/context';

ReactDOM.render(
  <React.StrictMode>
    <ContextControler>
      <App />
    </ContextControler>
  </React.StrictMode>,
  document.getElementById('root')
);
