import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './componentes/Primeiro';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const helloWorld = "Hello World!"
root.render(
  <React.Fragment>
      <Primeiro />
    <h2>
      {helloWorld.toLowerCase()}
    </h2>
  </React.Fragment>
);
