import React from "react";
import context from "./context";
import pathToRegExp from "path-to-regexp";
export default class Switch extends React.Component {
  static contextType = context;
  render() {
    const { pathname } = this.context.location;
    const { children } = this.props;
    const newChildren = Array.isArray(children)?children:[children];
    for(let i=0;i<newChildren.length;i++){
      let child=newChildren[i];
      const { exact=false,path='/',to } = child.props;
      if(to){
        const { history} = this.context;
        history.push(to);
        return null;
      } else {
        const reg = pathToRegExp(path,[],{end:exact});
        if(reg.test(pathname)){
          return child;
        }
      }
    }
    return null;
  }
}
