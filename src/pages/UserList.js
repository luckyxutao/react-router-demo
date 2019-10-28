import React, { Component } from "react";
import {Link,Route} from '../react-router-dom';
export default class UserList extends Component {
  state = {
    users : JSON.parse(localStorage.getItem('lists'))||[]
  }
  render() {
    const { users} = this.state;
    return (
      <ul>
        {
          users.map((v)=>{
            return <li><Link to={{
              pathname:`/user/detail/${v.id}`,
              state: v
            }}>{v.id}</Link></li>
          })
        }
      </ul>
    )
  }
}
