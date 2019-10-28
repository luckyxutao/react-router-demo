import React from "react";
import context from "./context";
export default class Link extends React.Component {
  static contextType = context;
  render() {
    const { to,...res } = this.props;
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        {...res}
        onClick={(e) => {
          e.preventDefault();
          this.context.history.push(to);
        }}
      >
        {this.props.children}
      </a>
    );
  }
}
