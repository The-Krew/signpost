import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminLayout from "./layouts/admin/admin";
import ThemeContextWrapper from './components/theme/themeWrapper';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeContextWrapper>
        <BrowserRouter>
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/admin" />
          </Switch>
        </BrowserRouter>
      </ThemeContextWrapper>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
