import React, { useEffect } from "react";

import authPerson from "@store/actions/auth/authActions";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = location.hash.slice(1).split("&");
    const rawToken = hash[0].split("=")[1];
    dispatch(authPerson(rawToken));
  }, [location.hash]);

  return (
    <Switch>
      <Route path="/" component={Auth} exact />
      <Route path="/questions" component={Questions} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default App;
