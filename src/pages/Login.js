import React, { Component } from "react";
import { Route, Redirect } from "../react-router-dom";
export default class Login extends Component {
  login=()=>{
    localStorage.setItem('isLogin','true');

    this.props.history.push(this.props.location.state.from || '/');
  }
  render() {
    return (
      <form onSubmit={this.login}>
        <div>请您登录</div>
        <div>
          用户名
          <input ref={this.username} type="text" />
        </div>
        <div>
          密码
          <input ref={this.password} type="text" />
        </div>
        <div>
          <button>提交</button>
        </div>
      </form>
    );
  }
}
