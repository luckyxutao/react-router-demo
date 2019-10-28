import React from "react";
import context from "./context";
import pathToRegExp from 'path-to-regexp'
export default class Redirect extends React.Component {
  static contextType = context;
  render() {
    const { push} = this.context.history;
    const { to } = this.props;
    push(to);
    return null;
  }
}
