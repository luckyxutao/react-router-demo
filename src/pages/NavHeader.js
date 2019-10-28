import React, { Component } from "react";
import { withRouter } from "../react-router-dom";
class NavHeader extends Component {
  render() {
    return (
      <div className="navbar-heading">
        <div
          className="navbar-brand"
          onClick={() => {
            this.props.history.push("/")
          }}
        >
          珠峰架构
        </div>
      </div>
    );
  }
}
export default withRouter(NavHeader);
