import React, { Component } from "react";
import { Route, Redirect } from "../react-router-dom";
export default class Protected extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          // eslint-disable-next-line no-unused-expressions
          return localStorage.getItem("isLogin") ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location.pathname } }}
            />
          );
        }}
      />
    );
  }
}
