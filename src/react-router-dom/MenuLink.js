import React from "react";
import context from "./context";
import { Route, Link } from "../react-router-dom";
import './MenuLink.css';
export default ({ to, exact, children }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={props => {
        return <Link to={to} className={props.match ? "active" : ""}>{children}</Link>;
      }}
    />
  );
};
