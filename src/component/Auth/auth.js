import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";
const auth = ({ history }) => {
  console.log(history.location);
  return (
    <>
      <div className="auth-container container-full">
        <Router>
          <Switch>
            <Route path={`${history.location.pathname}/`} component={Signin} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default auth;
