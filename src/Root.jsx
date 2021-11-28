import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StoreProvider from "./Provider";

import Login from "./login";
import App from "./App";
const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={App} />
        {/* <RoutesPublic path="/" component={Home} /> */}
      </Switch>
    </StoreProvider>
  </Router>
);

export default PagesRoot;
