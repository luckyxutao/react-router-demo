import React from "react";
import matchPath from "./matchPath";
import RouterContext from "./context";
class Switch extends React.Component {
    static contextType = RouterContext;
    render(){
        const {location} = this.context;
        let element = null, match;
        React.Children.forEach(this.props.children,child=>{
           if(match == null){
                element = child;
                const path = child.props.path || child.props.from;
                if(path){
                    match = matchPath(location.pathname,{...child.props,path});
                }
           } 
        });
        return element;
    }
}

export default Switch;

