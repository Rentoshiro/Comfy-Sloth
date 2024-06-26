import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
};
export default PrivateRoute;
