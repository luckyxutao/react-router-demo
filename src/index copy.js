import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route,Link,Redirect,Switch,MenuLink,BrowserRouter } from "./react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Protected from './pages/Protected';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NavHeader from './pages/NavHeader';
import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.render(
  <BrowserRouter>
    <>
        <div className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand"><NavHeader/></div>
                </div>
                <ul className="navbar-nav nav">
                    <li><MenuLink to={{pathname:'/',state:{title:'ksksk'}}}>首页</MenuLink></li>
                    <li><MenuLink to="/user">用户</MenuLink></li>
                    <li><MenuLink to="/profile">个人中心</MenuLink></li>
                </ul>
            </div>
        </div>
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Protected path="/profile" component={Profile}></Protected>
            <Route path="/login" component={Login}></Route>
            <Redirect to="/" ></Redirect>
        </Switch>
    </>
  </BrowserRouter>,
  document.getElementById("root")
);

