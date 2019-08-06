import React, { Component } from "react";

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["Learn React", "Checkout Redux"],
            inputValue: ""
        };
        this.addList = this.addList.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.renove = this.updateInputValue.bind(this);
    }

    addList() {
        // console.log('s', ...this.state.list)
        let newList = this.state.list;
        newList.push(this.state.inputValue)
        this.setState({
            list: newList,
            inputValue: ''
        })
    }

    renove(e) {
        let newwList = this.state.list;
        var index = newwList.indexOf(e.target.value);
        newwList.splice(index, 1);
        this.setState({
            list: newwList
        })

    }

    updateInputValue(e) {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => 
                            <li key={index}>
                               
                                <span>{item}</span>
                                <button onClick={this.remove}>x</button>
                            </li>
                        )}        
                    </ul>
                </div>

                <input id="input" 
                       type="text" 
                       value={this.state.inputValue} 
                       onChange={this.updateInputValue} 
                       autoComplete="off"
                />

                <button type="button" 
                        onClick={this.addList}>
                        Add Me
                </button>
            </div>
        );
    }
}
export default Todolist;