import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  return (
    <Route path={props.path}>
      {props.isLogined ? props.children : <Redirect to="./signin" />} 
    </Route>
  );
};

export default ProtectedRoute;
