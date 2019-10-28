import React, { Component } from "react";
import { Link, Route } from "../react-router-dom";
export default class UserAdd extends Component {
  username = React.createRef();
  password = React.createRef();
  handleSumit=()=>{
    let user = {
      username:this.username.current.value,
      password:this.password.current.value,
      id:Math.random()
    };
    const users = JSON.parse(localStorage.getItem('lists'))||[];
    users.push(user);
    localStorage.setItem('lists',JSON.stringify(users));
    this.props.history.push('/user/list')
  }
  render() {
    return (
      <form onSubmit={this.handleSumit}>
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
