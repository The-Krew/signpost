import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/scss/index.scss';

import Linkbox from "./components/linkbox";

ReactDOM.render(
  <React.StrictMode>
    <>
    Test
    <Linkbox></Linkbox>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
