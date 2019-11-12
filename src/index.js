import React from "react";
import ReactDOM from "react-dom";
import {createHashHistory} from 'history';
import { Router,Route,Switch,Redirect,Link } from "./react-router-dom2";
import { About,Home,Dashboard } from './containers';
const history = createHashHistory();
ReactDOM.render(
<Router history={history}>
    <div>
        <Link to="/about">about</Link>
    </div>
    <Switch>
        <Route path="/about" component={About}></Route>
        {/* <Route path="/dashboard/:city/:id" component={Dashboard}></Route> */}
        {/* <Redirect to="/dashboard" /> */}
        <Route path="/" component={Home}></Route>
    </Switch>
</Router>,
document.getElementById("root")
);
//http://localhost:3000/#/dashboard/beijing/32?x=1&y=2