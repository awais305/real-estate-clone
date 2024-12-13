import React from "react";
// import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { RoutePath } from "./RoutePaths";

const Protected = ({ children }) => {
  // if (auth.currentUser !== null) {
  //   return children;
  // }
  return <Navigate to={RoutePath.HomePage} />;
};

export default Protected;
