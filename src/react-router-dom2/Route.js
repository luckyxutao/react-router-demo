import React from "react";
import RouterContext from "./context";
import matchPath from "./matchPath";
export default class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    const { location } = this.context;
    const {
      path='/',
      component: Component,
      exact = false,
      render,
      children
    } = this.props;
    const match = matchPath(location.pathname, {
      exact,path
    });
    const props = { ...this.context, match };
    if(props.match){
      if(children){
        if(typeof children === 'function'){
          return children(props);
        } else {
          return children;
        }
      } else if(Component){
        return <Component {...props} />;
      } else if(render){
        return render(props);
      } else {
        return null;
      }
    } else if(typeof children === 'function'){
      return children(props);
    } else {
      return null;
    }
  }
}