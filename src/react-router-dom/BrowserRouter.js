import React from "react";
import Context from './context';
(function(history){
    let oldPush = history.pushState;
    history.pushState = function(state,title,url){
        if(window.onpushstate){
            window.onpushstate(state,title,url);
        }
        oldPush.apply(history,arguments); // [state,title,url]
    }
})(window.history)
export default class BrowserRouter extends React.Component{
    state = {
        location : {
            pathname: document.location.pathname ||'/',
            a:1
        }
    }

    componentDidMount(){
        window.onpopstate = event=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname: document.location.pathname,
                    state: event.state
                }
            });
        }
        window.onpushstate = (state,title,pathname)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname,
                    state
                }
            });
        }
    }

    locationState=null;

    render(){
        const that = this;
        let props = {
            location:this.state.location,
            history:{
                push:(to,state)=>{
                    if(that.getMessage){
                        const allow = window.prompt(this.getMessage(that.props.location));
                        if(!allow){
                            return ;
                        }
                    }
                    if(typeof to === 'object'){
                        const {pathname,state} = to;
                        this.locationState = state;
                        window.history.pushState(state,'',pathname);
                        // window.location.hash = pathname;
                    } else {
                        window.history.pushState(null,'',to);
                    }
                },
                block(message) {
                    that.getMessage=message;
                },
                unblock() {
                    that.getMessage=null;
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