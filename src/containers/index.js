import React from "react";
import {withRouter} from '../react-router-dom2'
function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  class Mobox extends React.Component{
    render(){
      console.log(this.props)
      return <div>Mobox</div>
    }
  }
  const RouterMobox = withRouter(Mobox);
  function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
        <RouterMobox a={1} b={2} />
      </div>
    );
  }

  export {
      About,
      Dashboard,
      Home
  }