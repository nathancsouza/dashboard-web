import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/Signin";
import Dashboard from "../pages/Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
