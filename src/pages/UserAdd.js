import React, { Component } from "react";
import { Prompt } from "../react-router-dom";
export default class UserAdd extends Component {
  username = React.createRef();
  password = React.createRef();
  state = {
    isBlocking:false
  }
  handleSumit=()=>{
    this.setState({
      isBlocking:false
    });
    // let user = {
    //   username:this.username.current.value,
    //   password:this.password.current.value,
    //   id:Math.random()
    // };
    // const users = JSON.parse(localStorage.getItem('lists'))||[];
    // users.push(user);
    // localStorage.setItem('lists',JSON.stringify(users));
    this.props.history.push('/user/list')
  }
  render() {
    const { isBlocking} = this.state;
    return (
      <form onSubmit={this.handleSumit}>
        <Prompt
              when={isBlocking}
              getMessage={()=>{
                return "Are you sure you want to leave?";
              }}
        />
        <div>
          用户名
          <input onChange={event=>{
            this.setState({isBlocking:event.target.value.length>0});
          }} ref={this.username} type="text" />
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
