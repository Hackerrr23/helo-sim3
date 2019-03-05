import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
// import SignUp from "./components/Register/Register";
// import SignIn from "./components/Login/Login";
// import Home from "./components/Home/Home";


export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    {/* <Route path="/signin" component={SignIn} />
    <Route path="/home" component={Home} /> */}
  </Switch>
);
