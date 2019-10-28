import React from "react";
import context from "./context";
import { Route } from "./index";
export default (Component) => {
  return function(props){
    return <Route render={routeProps=>{
      return <Component {...routeProps} />;
    }}></Route>
  }
};
