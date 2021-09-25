/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'test.css';
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import Success from "components/success.js";
import Failure from "components/Failure.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/checkout" render={(props) => <App {...props} />} />
      <Route path="/success"> <Success /></Route>
      <Route path="/failure"> <Failure /></Route>
      <Redirect to="/checkout" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


