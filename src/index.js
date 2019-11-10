import React from "react";
import ReactDOM from "react-dom";
import {createHashHistory} from 'history';
import { Router,Route,Switch,Redirect } from "./react-router-dom2";
import { About,Home,Dashboard } from './containers';
const history = createHashHistory();
ReactDOM.render(
<Router history={history}>
    <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect to="/dashboard" />
        <Route path="/" component={Home}></Route>
    </Switch>
</Router>,
document.getElementById("root")
);