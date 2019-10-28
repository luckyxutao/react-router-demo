import React from "react";
import context from "./context";
import pathToRegExp from "path-to-regexp";
export default class Route extends React.Component {
  static contextType = context;
  render() {
    const { pathname } = this.context.location;
    let keys = [];
    const {
      path='/',
      component: Component,
      exact = false,
      render,
      children
    } = this.props;
    const reg = pathToRegExp(path, keys, { end: exact });
    let props = {
      ...this.context
    };
    if (reg.test(pathname)) {
      let matches = pathname.match(reg);
      let [url, ...args] = matches || [];
      let params = {};
      keys.map((v, i) => {
        params[v.name] = args[i];
      });
      props.match = {
        url: pathname,
        isExact: pathname === url,
        path,
        params
      };
      if (Component) {
        return <Component {...props} />;
      } else if (render) {
        return render(props);
      } else if (children) {
        return children(props);
      }
    } else if (children) {
      return children(props);
    } else {
      return null;
    }
  }
}
