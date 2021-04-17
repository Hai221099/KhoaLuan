import React from "react";
import { Route, Redirect } from "react-router-dom";

const currentRole = localStorage.getItem("role");
export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!currentRole) {
        return <Redirect to={{ pathname: "/" }} />;
      }

      if (roles && roles.includes(currentRole)) {
        return <Component {...props} />;
      }

      return <Redirect to={{ pathname: "/403" }} />;
    }}
  />
);
