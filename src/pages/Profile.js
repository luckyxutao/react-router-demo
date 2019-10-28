import React, { Component } from "react";
import { Route, Redirect } from "../react-router-dom";
export default class Profile extends Component {
  render() {
    const { component: Component, location, ...rest } = this.props;
    return (
        <div>profile</div>
    );
  }
}
