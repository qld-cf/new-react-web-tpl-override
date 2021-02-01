import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "@css/index.normal.less";
import Main from "@layout/Main/";
// import Loading from '@components/Loading'
import Routes from "@utils/getRoutes";
import Login from "@views/Login";

let Entry = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Main>
        <Redirect exact from="/" to="/home" />
        {Routes}
      </Main>
    </Switch>
  );
};

export default Entry;
