import React, { Component } from "react";
class Counter extends Component{

    constructor(props){
        super(props);
        this.state= {
            count: 0,
            name: this.props.name
        };
        this.chaNge=this.chaNge.bind(this);
    }

    chaNge() {
        this.setState({
            count: this.state.count+1
            
            
        });
    
    }



    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <div><button onClick={this.chaNge}> {this.state.name}</button></div>
            </div>
        );
    }
}
export default Counter;