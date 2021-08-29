import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';

import Linkbox from "./components/linkbox";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Linkbox></Linkbox>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
