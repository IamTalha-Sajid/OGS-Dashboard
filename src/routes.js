import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar/Sidebar";
import Account from "./components/Account/account";
const AppRoutes = () => {
  return (
      <Suspense fallback={true}>
        {/* <Header /> */}
        <Switch>
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/manage-contract" component={SideBar} exact/>
          <Route path="/my-account" component={Account} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
  );
};

export default AppRoutes;
