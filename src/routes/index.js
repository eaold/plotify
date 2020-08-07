import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DefaultLayout  from "../layouts/DefaultLayout";

// Components
import Dashboard from "../components/Dashboard";
import Home from '../components/Home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
