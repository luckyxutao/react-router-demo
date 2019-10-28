import React from "react";
import Context from './context';
export default class HashRouter extends React.Component{
    state = {
        location : {
            pathname:window.location.hash.slice(1)||'/',
            a:1
        }
    }

    componentDidMount(){
        window.location.hash = window.location.hash.slice(1)||'/';
        window.addEventListener('hashchange',ev=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname: window.location.hash.slice(1),
                    state : {
                        ...this.locationState
                    }
                }
            });
        });
    }

    locationState=null;

    render(){
        let props = {
            location:this.state.location,
            history:{
                push:(to,state)=>{
                    if(typeof to === 'object'){
                        const {pathname,state} = to;
                        this.locationState = state;
                        window.location.hash = pathname;
                    } else {
                        window.location.hash=to;
                    }
                }
            }
        }
        return (
            <Context.Provider value={props}>
                {this.props.children}
            </Context.Provider>
        )
    }
}