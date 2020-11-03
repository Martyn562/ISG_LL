import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const Content = inject("Store")(observer(({ Store, ...rest }) => {
  const location = useLocation();
  const { isAuthenticated } = Store;

  return (
    <Route {...rest}>
      {isAuthenticated ?
        <h1>Top Secret Info... :)</h1>
      :
        <Redirect to={{ pathname: "/SignUp", state: { from: location } }} />
      }
    </Route>
  );
}));

export default Content;
