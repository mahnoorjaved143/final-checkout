import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from 'components/Header/index';
import TransactionSuccessPage from 'components/TransactionResponse/SuccessPage';
import TransactionFailurePage from 'components/TransactionResponse/FailurePage';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/paper-dashboard.scss?v=1.3.0';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exactly path="/checkout">
          <App />
        </Route>
        <Route exactly path="/success">
          <TransactionSuccessPage />
        </Route>
        <Route exactly path="/failure">
          <TransactionFailurePage />
        </Route>
        <Redirect to="/checkout" />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
