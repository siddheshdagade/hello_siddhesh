
import React, { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props);
        this.state= {
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + this.props.incrementBy })
    }

    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                <div>{this.state.counter}</div>
                <button type="button" onClick={this.increment}>Increment</button>
                <div>Multiplier: {this.state.counter * 100}</div>
                {/* <div> <button onClick={myFunct}>{this.state.button}</button></div> */}
            </div>
        );
    }

}
export default Counter;