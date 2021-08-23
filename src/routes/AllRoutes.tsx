import React from "react";
import { Switch, Route } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import InteractRoute from "./InteractRoute";

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={InteractRoute}></Route>
      <Route exact path="/main" component={MainContainer}></Route>
    </Switch>
  );
};

export default AllRoutes;
