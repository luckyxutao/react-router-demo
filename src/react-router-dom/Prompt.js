import React from "react";
import context from "./context";
export default class Prompt extends React.Component {
  static contextType = context;
  componentWillUnmount() {
    this.context.history.unblock();
  }
  render() {
    const { when,getMessage } = this.props;
    if(when){
      this.context.history.block(getMessage);
    } else {
      this.context.history.unblock();
    }
    return null;
  }
}
