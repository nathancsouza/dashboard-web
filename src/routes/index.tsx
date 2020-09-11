import React from "react";
import { Switch, Route } from "react-router-dom";

// import SignIn from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import UserInformation from "../pages/UserInformation";

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={SignIn} /> */}
    <Route path="/" exact component={Dashboard} />
    <Route path="/users/:id" exact component={UserInformation} />
  </Switch>
);

export default Routes;
