import { routesAdmin, routesStudent, routesDefault } from "./routes";
import { useState, useCallback, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import Login from "./containers/User/Login";
import useToken from "./contents/public/useToken";
import useRole from "./contents/public/useRole";
import { PrivateRoute } from "./contents/public/privateRoute";

function App() {
  // localStorage.clear();
  const { token, setToken } = useToken();
  const { role, setRole } = useRole();
  // const { route, setRoute } = useRoute();

  const getUser = (e) => {
    setRole(e.role);
    setToken(e.accessToken);
    // if (e.role == "admin") window.location.href = "/";
    // else window.location.href = "/student";
    switch (e.role) {
      case "admin":
        window.location.href = "/";
        break;
      case "student":
        window.location.href = "/student";
        break;
      case "lecturer":
        window.location.href = "/class/1";
        break;
    }
  };

  const showRoute = () => {
    if (!token) {
      return <Login getUser={(e) => getUser(e)}></Login>;
    } else {
      // console.log(store.dispatch());
      let result = routesAdmin.map((route, index) => {
        // return (
        //   <PrivateRoute
        //     key={index}
        //     path={route.path}
        //     exact={route.exact}
        //     component={route.components}
        //     roles={route.role}
        //   />
        // );
        if (route.role) {
          return (
            <PrivateRoute
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.components}
              roles={route.role}
            />
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.components}
            />
          );
        }
      });

      return (
        <Router>
          <Switch>{result}</Switch>
          <ToastContainer hideProgressBar autoClose={3000} />
        </Router>
      );
    }
  };

  return showRoute();
}

export default App;
