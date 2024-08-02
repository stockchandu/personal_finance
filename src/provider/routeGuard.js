import React from "react";
import { Navigate } from "react-router-dom";
import { useLoginData } from "../hooks/useSelector";

export const RouteGuard = ({ children, redirectPath = "/login" }) => {
  const { isAuthenticated } = useLoginData();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};
