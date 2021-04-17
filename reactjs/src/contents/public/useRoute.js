import { useState } from "react";

export default function useRoute() {
  const getRoute = () => {
    // const routeString = localStorage.getItem("route");
    const routeString = localStorage.getItem("route");
    const userRoute = routeString;
    return userRoute;
  };

  const [route, setRoute] = useState(getRoute());

  const saveRoute = (userRoute) => {
    localStorage.setItem("route", userRoute);
    setRoute(userRoute);
  };

  return {
    setRoute: saveRoute,
    route,
  };
}
