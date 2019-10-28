import React, { Component } from "react";
import { Link, Route } from "../react-router-dom";
export default class UserDetail extends Component {
  state={
    user:null
  }
  componentDidMount(){
    let lists = JSON.parse(localStorage.getItem('lists'))||[];
    const { id} = this.props.match.params;
    this.setState({
      user:lists.find((v)=>v.id ==id)
    })
  }
  render() {
    // console.log(this.props.location)
    const { user } = this.state;
    if(!user){
      return null;
    }
    return (
      <div onSubmit={this.handleSumit}>
        <div>
          用户名:{user && user.username}
        </div>
        <div>
          密码{user && user.password}
        </div>
      </div>
    );
  }
}
